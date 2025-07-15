package com.cognizant.spring_learn.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {
    private static final String SECRET_KEY = "mysecretkey";

    public String generateToken(String username) {
    	String token = Jwts.builder()
    		    .setSubject(username)
    		    .setIssuedAt(new Date())
    		    .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
    		    .signWith(SignatureAlgorithm.HS256, secretKey.getBytes(StandardCharsets.UTF_8)) // secretKey is your string key
    		    .compact();

    }
}
