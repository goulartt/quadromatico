package com.edu.unifil.br.quadromatico.repositorio;

import com.edu.unifil.br.quadromatico.entidade.Usuario;

import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    Usuario findByLogin(String login);

}