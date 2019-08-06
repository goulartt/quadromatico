package com.edu.unifil.br.quadromatico.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CursoDTO {

    private Long id;

    private String nome;

    private Integer qtdePeriodos;

    private List<DisciplinaDTO> disciplinas;

    private List<TurmaDTO> turmas;

}