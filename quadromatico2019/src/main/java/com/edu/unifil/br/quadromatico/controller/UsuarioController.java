package com.edu.unifil.br.quadromatico.controller;

import static com.edu.unifil.br.quadromatico.security.SecurityConstants.HEADER_STRING;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import com.edu.unifil.br.quadromatico.dto.CursoDTO;
import com.edu.unifil.br.quadromatico.dto.TurmaDTO;
import com.edu.unifil.br.quadromatico.entidade.Curso;
import com.edu.unifil.br.quadromatico.entidade.Turma;
import com.edu.unifil.br.quadromatico.entidade.Usuario;
import com.edu.unifil.br.quadromatico.entidade.UsuarioSecurity;
import com.edu.unifil.br.quadromatico.repositorio.CursoRepository;
import com.edu.unifil.br.quadromatico.repositorio.GrupoRepository;
import com.edu.unifil.br.quadromatico.repositorio.TurmaRepository;
import com.edu.unifil.br.quadromatico.repositorio.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${spring.data.rest.base-path}/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private TurmaRepository turmaRepository;

    @Autowired
    private GrupoRepository grupoRepository;
    
        @Autowired
        private BCryptPasswordEncoder bCryptPasswordEncoder;
    
        @PostMapping("/sign-up")
        public void registrar(@RequestBody Usuario usuario) {
            usuario.setSenha(bCryptPasswordEncoder.encode(usuario.getSenha()));
            usuarioRepository.save(usuario);
        }
    
        @PostMapping("/getCursosComAcesso")
        public List<CursoDTO> getCursos(@RequestHeader(HEADER_STRING) String token) {
            
            List<Curso> resultado = cursoRepository.findByUsuariosComAcesso(
                new HashSet<Usuario>() {
                {
                    add(UsuarioSecurity.getUsuarioAutorizado(token));
                }
            });
    
            List<CursoDTO> cursos = new ArrayList<>();
    
            for (Curso curso : resultado) {
                CursoDTO cursoDTO = new CursoDTO();
    
                cursoDTO.setId(curso.getId());
                cursoDTO.setNome(curso.getNome());
                cursoDTO.setQtdePeriodos(curso.getQtdePeriodos());
    
                        List<Turma> turmas = turmaRepository.findByCurso(curso);
                        cursoDTO.setTurmas(
                            turmas.stream()
                            .map(t -> 
                                new TurmaDTO(t.getId(), t.getCodigo(), null, t.getHorario(), t.getPeriodo(), grupoRepository.findByTurma(t))
                         )
                            .collect(Collectors.toList()));
            
                        cursos.add(cursoDTO); 
                    }
            
                    return cursos;
                }
}