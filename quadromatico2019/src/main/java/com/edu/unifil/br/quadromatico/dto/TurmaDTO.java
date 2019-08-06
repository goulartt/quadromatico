package com.edu.unifil.br.quadromatico.dto;

import java.util.List;

import com.edu.unifil.br.quadromatico.entidade.Grupo;
import com.edu.unifil.br.quadromatico.entidade.Horario;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TurmaDTO {

    private Long id;

    private String codigo;

    private CursoDTO curso;
    
    private Horario horario;

    private Integer periodo;
    
    private List<Grupo> grupos;

}