package com.example.demo.dto;

import lombok.Data;
public class LoginRequest {

	 private String email;
	    private String password;
	    
	    
	    
		public void setEmail(String email) {
			this.email = email;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public CharSequence getPassword() {
			// TODO Auto-generated method stub
			return null;
		}
		public String getEmail() {
			// TODO Auto-generated method stub
			return null;
		}
}
