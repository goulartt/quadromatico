package com.edu.unifil.br.quadromatico.entidade;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@ToString(exclude = {"cursos", "permissoes"})  
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer"})
public class Usuario {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    private @Column(unique = true) String login;

    private String senha;

    @ManyToMany(mappedBy = "usuariosComPermissao")
    Set<Permissao> permissoes;

    @ManyToMany(mappedBy = "usuariosComAcesso")
    Set<Curso> cursos;

}