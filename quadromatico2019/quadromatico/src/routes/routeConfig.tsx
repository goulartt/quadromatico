import React, { ComponentClass, FunctionComponent } from 'react';
import Calendario from 'pages/Calendario';
import CadastroRecurso from 'pages/cadastro/CadastroRecurso';
import CadastroDisciplina from 'pages/cadastro/CadastroDisciplina';
import CadastroTurma from 'pages/cadastro/CadastroTurma';
import CadastroProfessor from 'pages/cadastro/CadastroProfessor';
import CadastroAula from 'pages/cadastro/CadastroAula';
import CadastroUsuario from 'pages/cadastro/CadastroUsuario';
import CadastroCurso from 'pages/cadastro/CadastroCurso';

import Private from './private';

import RouteConfig from 'interfaces/common/route-config';
//import { ca } from 'react-icons/md';

const componentes: { [nome: string]: ComponentClass | FunctionComponent } = {
  Calendario,
  CadastroRecurso,
  CadastroDisciplina,
  CadastroTurma,
  CadastroProfessor,
  CadastroAula,
  CadastroUsuario,
  CadastroCurso
};

const routes: RouteConfig[] = [
  {
    id: 1,
    title: 'Calendario',
    path: '/',
    icon: 'FaCalendar',
    componentType: 'Calendario',
  },
  {
    id: 2,
    title: 'Cadastro',
    path: '/cadastro',
    icon: 'MdFeaturedPlayList',
  },
  {
    id: 3,
    title: 'Curso',
    parentId: 2,
    path: '/curso',
    componentType: 'CadastroCurso',
  },
  {
    id: 4,
    title: 'Recurso',
    parentId: 2,
    path: '/recurso',
    componentType: 'CadastroRecurso',
  },
  {
    id: 5,
    title: 'Disciplina',
    parentId: 2,
    path: '/disciplina',
    componentType: 'CadastroDisciplina',
  },
  {
    id: 6,
    title: 'Turma',
    parentId: 2,
    path: '/turma',
    componentType: 'CadastroTurma',
  },
  {
    id: 7,
    title: 'Professor',
    parentId: 2,
    path: '/professor',
    componentType: 'CadastroProfessor',
  },
  {
    id: 8,
    title: 'Aula',
    parentId: 2,
    path: '/aula',
    componentType: 'CadastroAula',
  },
  {
    id: 9,
    title: 'Usuário',
    parentId: 2,
    path: '/usuario',
    componentType: 'CadastroUsuario',
  },
];

const buildRoutes = () => {
  const routeList: RouteConfig[] = [];
  routes.sort(m => +!!m.parentId);
  for (let route of routes) {
    if (route.parentId) {
      const parent = routeList.find(m => m.id === route.parentId)!;
      route = { ...route, path: `${parent.path}${route.path}` };
      parent!.children = parent!.children || [];
      parent!.children.push(route);
    } else {
      routeList.push({ ...route, path: route.path });
    }
  }
  return routeList.filter(node => !node.parentId);
};

const buildRouteElements = (routes: RouteConfig[]) => {
  const stack: RouteConfig[] = [];
  const elements: JSX.Element[] = [];
  for (let route of routes) {
    stack.push(route);
    while (stack.length > 0) {
      const route = stack.pop();
      for (let m of route!.children || []) {
        stack.push(m);
      }
      if (route!.componentType) {
        route!.component = componentes[route!.componentType];
        route!.exact = true;
        elements.push(<Private {...route} />);
      }
    }
  }
  return elements;
};

export const ROUTES = buildRoutes();

export const ROUTE_ELEMENTS = buildRouteElements(ROUTES);

export const getRoute = (link: string) => {
  const stack: RouteConfig[] = [];
  for (let route of routes) {
    stack.push(route);
    while (stack.length > 0) {
      const route = stack.pop();
      for (let m of route!.children || []) {
        stack.push(m);
      }
      if (route!.path === link) {
        return route!;
      }
    }
  }
  return null;
};
