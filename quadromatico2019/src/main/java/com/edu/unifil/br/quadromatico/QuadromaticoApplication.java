package com.edu.unifil.br.quadromatico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.edu.unifil.br.quadromatico.entidade.Usuario;
import com.edu.unifil.br.quadromatico.repositorio.UsuarioRepository;

@SpringBootApplication
public class QuadromaticoApplication implements CommandLineRunner {
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UsuarioRepository usuarioRepository;
    
	@Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

	public static void main(String[] args) {
		SpringApplication.run(QuadromaticoApplication.class, args);
		
	}

	@Override
	public void run(String... args) throws Exception {
		/*usuarioRepository.deleteAll();
		Usuario u = new Usuario();
		u.setLogin("test");
		u.setSenha(bCryptPasswordEncoder.encode("test"));
		usuarioRepository.save(u);*/

		
	}

}
