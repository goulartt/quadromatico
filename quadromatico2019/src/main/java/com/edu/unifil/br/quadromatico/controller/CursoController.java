package com.edu.unifil.br.quadromatico.controller;

import java.util.List;

import com.edu.unifil.br.quadromatico.entidade.Disciplina;
import com.edu.unifil.br.quadromatico.entidade.Horario;
import com.edu.unifil.br.quadromatico.entidade.Professor;
import com.edu.unifil.br.quadromatico.entidade.Recurso;
import com.edu.unifil.br.quadromatico.repositorio.CursoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${spring.data.rest.base-path}/curso")
public class CursoController {

    @Autowired
    private CursoRepository cursoRepository;

    @GetMapping("/getDisciplinasCurso")
    public List<Disciplina> getDisciplinasCurso(Long idCurso) {
        List<Disciplina> resultado = cursoRepository.findDisciplinasByCurso(idCurso);
        return resultado;
    }

    @GetMapping("/getHorariosCurso")
    public List<Horario> getHorariosCurso(Long idCurso) {
        List<Horario> resultado = cursoRepository.findHorariosByCurso(idCurso);
        return resultado;
    }

    @GetMapping("/getRecursosCurso")
    public List<Recurso> getRecursosCurso(Long idCurso) {
        List<Recurso> resultado = cursoRepository.findRecursosByCurso(idCurso);
        return resultado;
    }

    @GetMapping("/getProfessoresDisciplinaCurso")
    public List<Professor> getProfessoresDisciplinaCurso(Long idCurso, Long idDisciplina) {
        List<Professor> resultado = cursoRepository.findPofessoresByDisciplinaCurso(idCurso, idDisciplina);
        return resultado;
    }
}