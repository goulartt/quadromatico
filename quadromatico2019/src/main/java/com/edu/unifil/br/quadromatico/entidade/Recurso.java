package com.edu.unifil.br.quadromatico.entidade;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer"})
public class Recurso {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    private String codigo;

    private String descricao;
    
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private Curso curso;

    private boolean isEspacoFisico;

}