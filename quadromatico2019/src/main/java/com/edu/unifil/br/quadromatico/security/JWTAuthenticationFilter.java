package com.edu.unifil.br.quadromatico.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.auth0.jwt.JWT;
import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import com.edu.unifil.br.quadromatico.entidade.Usuario;
import com.edu.unifil.br.quadromatico.entidade.UsuarioSecurity;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.edu.unifil.br.quadromatico.security.SecurityConstants.EXPIRATION_TIME;
import static com.edu.unifil.br.quadromatico.security.SecurityConstants.HEADER_STRING;
import static com.edu.unifil.br.quadromatico.security.SecurityConstants.SECRET;
import static com.edu.unifil.br.quadromatico.security.SecurityConstants.TOKEN_PREFIX;;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        try {
            Usuario credenciais = new ObjectMapper()
            .readValue(req.getInputStream(), Usuario.class);

            return authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    credenciais.getLogin(), 
                    credenciais.getSenha(),
                    new ArrayList<>())
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) {
        String token = JWT.create()
        .withSubject(((User) auth.getPrincipal()).getUsername())
        .withHeader(new HashMap<>() {
            {
                put("usuario", (UsuarioSecurity) auth.getPrincipal());
            }
        })
        .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
        .sign(HMAC512(SECRET.getBytes()));
        
        res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
    }

}