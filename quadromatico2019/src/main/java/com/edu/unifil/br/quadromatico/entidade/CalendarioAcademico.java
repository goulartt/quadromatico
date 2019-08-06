package com.edu.unifil.br.quadromatico.entidade;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CalendarioAcademico implements Serializable {

    private static final long serialVersionUID = 4542948384390520261L;

    private @Id Long ano;

    private @Id Integer semestre;

    private LocalDate inicioSemestre;
    private LocalDate terminoSemestre;
}