package com.edu.unifil.br.quadromatico.entidade;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Professor {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    private String nome;

}