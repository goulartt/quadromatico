package com.edu.unifil.br.quadromatico.entidade;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@ToString(exclude = {"usuariosComAcesso"})  
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer"})
public class Curso {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    private String nome;

    private Integer qtdePeriodos;

    @ManyToMany
    @JoinTable(
    name = "usuario_curso", 
    joinColumns = @JoinColumn(name = "curso_id"), 
    inverseJoinColumns = @JoinColumn(name = "usuario_id"))
    @JsonIgnore
    Set<Usuario> usuariosComAcesso;

}