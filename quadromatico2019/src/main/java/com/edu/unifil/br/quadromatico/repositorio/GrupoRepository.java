package com.edu.unifil.br.quadromatico.repositorio;

import java.util.List;

import com.edu.unifil.br.quadromatico.entidade.Grupo;
import com.edu.unifil.br.quadromatico.entidade.Turma;

import org.springframework.data.repository.CrudRepository;

public interface GrupoRepository extends CrudRepository<Grupo, Long> {

    List<Grupo> findByTurma(Turma turma);

}