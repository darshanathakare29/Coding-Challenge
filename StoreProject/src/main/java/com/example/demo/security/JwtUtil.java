package com.example.demo.security;



import io.jsonwebtoken.*;
import jakarta.annotation.PostConstruct;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private final String secret = "Z3V5c3RvbkZsYW1lczEyMyQmKjU2Nzg5QCMhQGZqZHNha2xqZHNha2xqZHNha2w="; // Use env variable in production
    private final long expiration = 3600000; // 1 hour

    public String generateToken(String email, String role) {
        return Jwts.builder()
                .setSubject(email)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }
    
    
    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    private Claims extractClaims(String token) {
		// TODO Auto-generated method stub
		return null;
	}


	@PostConstruct
    public void init() {
        System.out.println("JWT Secret loaded: " + (secret != null));
    }
    
    public String extractEmail(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    public String extractRole(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().get("role", String.class);
    }

    public boolean isTokenValid(String token) {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }


	public boolean validateToken(String token, UserDetails userDetails) {
		// TODO Auto-generated method stub
		return false;
	}


	public String generateToken(UserDetails userDetails) {
		// TODO Auto-generated method stub
		return null;
	}
}
