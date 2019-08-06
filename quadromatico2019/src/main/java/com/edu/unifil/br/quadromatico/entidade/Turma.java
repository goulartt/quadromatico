package com.edu.unifil.br.quadromatico.entidade;

import java.io.Serializable;

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
public class Turma implements Serializable{

    private static final long serialVersionUID = -3085813624012650836L;

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    private String codigo;

    private Integer periodo;

    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private Curso curso;

    @ManyToOne
    @JoinColumn
    private Horario horario;

}