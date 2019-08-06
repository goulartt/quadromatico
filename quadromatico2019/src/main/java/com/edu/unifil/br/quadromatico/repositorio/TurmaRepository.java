package com.edu.unifil.br.quadromatico.repositorio;

import java.util.List;

import com.edu.unifil.br.quadromatico.entidade.Curso;
import com.edu.unifil.br.quadromatico.entidade.Turma;

import org.springframework.data.repository.CrudRepository;

public interface TurmaRepository extends CrudRepository<Turma, Long> {

    List<Turma> findByCurso(Curso curso);

}