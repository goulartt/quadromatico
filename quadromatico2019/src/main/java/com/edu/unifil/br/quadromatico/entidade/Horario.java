package com.edu.unifil.br.quadromatico.entidade;

import java.time.LocalTime;

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
public class Horario {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    private String descricao;

    private LocalTime inicio;
    private LocalTime termino;

    private LocalTime inicioIntervalo;
    private LocalTime terminoIntervalo;


}