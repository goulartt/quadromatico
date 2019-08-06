package com.edu.unifil.br.quadromatico.authservice;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

import com.edu.unifil.br.quadromatico.entidade.Usuario;
import com.edu.unifil.br.quadromatico.entidade.UsuarioSecurity;
import com.edu.unifil.br.quadromatico.repositorio.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private UsuarioRepository usuarioRepository;

    public UserDetailsServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByLogin(login);
        if (usuario == null) {
            throw new UsernameNotFoundException(login);
        }
        return new UsuarioSecurity(usuario.getId(), usuario.getLogin(), usuario.getSenha(), emptyList());
    }
}