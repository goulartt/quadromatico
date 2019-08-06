package com.edu.unifil.br.quadromatico.security;

public class SecurityConstants {
    public static final String SECRET = "hYRt2\"J/DyLS:nd~~[#stQ(dVb9R{ihf@%d/6.6&IW|ERi:kUH`lMU|SD$qi2I*";
    public static final long EXPIRATION_TIME = 864_000_000; // 10 dias
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/api/usuario/sign-up";
    public static final String LOGIN_URL = "/login";
}