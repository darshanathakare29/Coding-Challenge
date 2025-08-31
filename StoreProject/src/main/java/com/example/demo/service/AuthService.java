package com.example.demo.service;



import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.AuthRequest;
import com.example.demo.dto.AuthResponse;
import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.SignupRequest;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtil;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public void signup(SignupRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());
        return new AuthResponse(token);
    }

	public AuthResponse registerUser(AuthRequest request) {

		 if (userRepository.findByEmail(request.getEmail()).isPresent()) {
		        throw new RuntimeException("Email already registered");
		    }

		    // Create new user
		    User user = new User();
		    user.setUsername((String) request.getName());
		    user.setEmail(request.getEmail());
		    user.setPassword(passwordEncoder.encode(request.getPassword()));
		    user.setRole(Role.USER); // or request.getRole() if dynamic

		    // Save user
		    userRepository.save(user);

		    // Generate JWT token
		    String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());

		    return new AuthResponse(token);
		
		
		
	}
}
