package com.edu.unifil.br.quadromatico.dto;

import java.util.List;

import com.edu.unifil.br.quadromatico.entidade.Professor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DisciplinaDTO {
    
    private Long id;

    private CursoDTO curso;

    private List<Professor> professores;

}