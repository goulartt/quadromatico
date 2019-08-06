package com.edu.unifil.br.quadromatico.controller;

import java.util.HashMap;
import java.util.Map;

import com.edu.unifil.br.quadromatico.entidade.Usuario;
import com.edu.unifil.br.quadromatico.entidade.UsuarioSecurity;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.edu.unifil.br.quadromatico.security.SecurityConstants.HEADER_STRING;

@RestController
@RequestMapping("${spring.data.rest.base-path}/auth")
public class AuthController {

    @GetMapping("/checkPermissions")
    public ResponseEntity checkPermissions(@RequestHeader(HEADER_STRING) String token) {
        
        Usuario usuario = UsuarioSecurity.getUsuarioAutorizado(token);

        Map<Object, Object> model = new HashMap<>();
        model.put("usuario", usuario.getLogin());
        model.put("permissoes", "");
        return ResponseEntity.ok(model);
    }
}