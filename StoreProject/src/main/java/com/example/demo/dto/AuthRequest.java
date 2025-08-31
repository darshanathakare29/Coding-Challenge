package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthRequest {
	
	
	    private String email;
	    private String password;
	    private String name;
	

		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
	public void setName(String name) {
		this.name=name;
	}
		public String getName() {
			// TODO Auto-generated method stub
			return null;
		}
	    
	    
}


