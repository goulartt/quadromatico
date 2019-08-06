package com.edu.unifil.br.quadromatico.security;

import static com.edu.unifil.br.quadromatico.security.SecurityConstants.LOGIN_URL;
import static com.edu.unifil.br.quadromatico.security.SecurityConstants.SIGN_UP_URL;

import java.util.Arrays;

import com.edu.unifil.br.quadromatico.authservice.UserDetailsServiceImpl;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {

    private UserDetailsServiceImpl userDetailsService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public WebSecurity(UserDetailsServiceImpl userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userDetailsService = userDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public void configure(org.springframework.security.config.annotation.web.builders.WebSecurity web) throws Exception {
        web.ignoring()
        .antMatchers(
          "/app/**",
          "/static/**",
          "/"
          );
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors()
        .and()
        .csrf()
                .disable()
        .authorizeRequests()
                .antMatchers(HttpMethod.POST, SIGN_UP_URL).permitAll()
                .antMatchers(HttpMethod.GET, LOGIN_URL).permitAll()
                .antMatchers("/app/**", "/").permitAll()
                .anyRequest().authenticated()
        .and()
        .addFilter(new JWTAuthenticationFilter(authenticationManager()))
        .addFilter(new JWTAuthorizationFilter(authenticationManager()))
        // this disables session creation on Spring Security
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

    CorsConfiguration corsConfiguration = new CorsConfiguration();
    corsConfiguration
    .applyPermitDefaultValues()
    .setAllowedOrigins(Arrays.asList("http://localhost:3000"));

    corsConfiguration.setExposedHeaders(Arrays.asList("Authorization"));

    source.registerCorsConfiguration("/**", corsConfiguration);

    return source;
  }

//   @Bean
//   @Profile("dev")
//   public RequestCache refererRequestCache() {
//       return new HttpSessionRequestCache() {
//           @Override
//           public void saveRequest(HttpServletRequest request, HttpServletResponse response) {
//               String referrer = request.getHeader("referer");
//               if (referrer != null) {
//                   request.getSession().setAttribute("SPRING_SECURITY_SAVED_REQUEST", new SimpleSavedRequest(referrer));
//               }
//           }
//       };
//   }
}