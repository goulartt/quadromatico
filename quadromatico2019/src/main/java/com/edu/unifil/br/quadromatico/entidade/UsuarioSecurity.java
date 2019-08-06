package com.edu.unifil.br.quadromatico.entidade;

import java.util.Collection;
import java.util.Map;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import static com.edu.unifil.br.quadromatico.security.SecurityConstants.SECRET;
import static com.edu.unifil.br.quadromatico.security.SecurityConstants.TOKEN_PREFIX;

public class UsuarioSecurity extends User {

	public UsuarioSecurity(Long id, String username, String password, Collection<? extends GrantedAuthority> authorities) {
		super(username, password, authorities);
        this.id = id;
	}

	private static final long serialVersionUID = -2698673856841953281L;

	private Long id;

    public Long getId(){
        return id;
    } 

    public static Usuario getUsuarioAutorizado(String token) {
        Map<String, Object> usuarioAutenticado = JWT.require(Algorithm.HMAC512(SECRET.getBytes()))
                .build()
                .verify(token.replace(TOKEN_PREFIX, ""))
                .getHeaderClaim("usuario").asMap();

        Usuario usuario = new Usuario();
        usuario.setId(Long.valueOf((Integer) usuarioAutenticado.get("id")));
        usuario.setLogin((String) usuarioAutenticado.get("username"));

        return usuario;
    }

    // public String getLogin() {
    //     return login;
    // }

    // public String getSenha() {
    //     return senha;
    // }
}