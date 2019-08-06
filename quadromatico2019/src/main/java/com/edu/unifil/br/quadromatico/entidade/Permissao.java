package com.edu.unifil.br.quadromatico.entidade;

import javax.persistence.JoinTable;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@ToString(exclude = {"usuariosComPermissao"})  
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer"})
public class Permissao {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    private String descricao;

    @ManyToMany
    @JoinTable(
    name = "usuario_permissao", 
    joinColumns = @JoinColumn(name = "permissao_id"), 
    inverseJoinColumns = @JoinColumn(name = "usuario_id"))
    @JsonIgnore
    Set<Usuario> usuariosComPermissao;
}