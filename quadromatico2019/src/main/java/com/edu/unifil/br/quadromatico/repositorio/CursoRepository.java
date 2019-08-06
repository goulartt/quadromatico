package com.edu.unifil.br.quadromatico.repositorio;

import java.util.List;
import java.util.Set;

import com.edu.unifil.br.quadromatico.entidade.Curso;
import com.edu.unifil.br.quadromatico.entidade.Disciplina;
import com.edu.unifil.br.quadromatico.entidade.Horario;
import com.edu.unifil.br.quadromatico.entidade.Professor;
import com.edu.unifil.br.quadromatico.entidade.Recurso;
import com.edu.unifil.br.quadromatico.entidade.Usuario;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CursoRepository extends CrudRepository<Curso, Long> {

    List<Curso> findByUsuariosComAcesso(Set<Usuario> usuariosComAcesso);

    @Query("SELECT d FROM Curso c " + 
           "JOIN CursoDisciplina cd ON c.id = cd.curso.id " +
           "JOIN Disciplina d ON d.id = cd.disciplina.id " +
           "WHERE c.id = :idCurso")
    List<Disciplina> findDisciplinasByCurso(@Param("idCurso") Long idCurso);

    @Query("SELECT t.horario FROM Curso c " + 
           "JOIN Turma t ON c.id = t.curso.id " +
           "WHERE c.id = :idCurso")
    List<Horario> findHorariosByCurso(@Param("idCurso") Long idCurso);

    @Query("SELECT r FROM Curso c " + 
           "JOIN Recurso r ON c.id = r.curso.id " +
           "WHERE c.id = :idCurso")
    List<Recurso> findRecursosByCurso(@Param("idCurso") Long idCurso);

    @Query("SELECT cdp.professor FROM Curso c " + 
           "JOIN CursoDisciplina cd ON c.id = cd.curso.id " +
           "JOIN CursoDisciplinaProfessor cdp ON cd.id = cdp.cursoDisciplina.id " +
           "WHERE c.id = :idCurso AND cd.disciplina.id = :idDisciplina")
    List<Professor> findPofessoresByDisciplinaCurso(
           @Param("idCurso") Long idCurso,
           @Param("idDisciplina") Long idDisciplina
           );
}