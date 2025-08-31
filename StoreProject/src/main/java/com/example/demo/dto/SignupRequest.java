package com.example.demo.dto;

public class SignupRequest {
	 private String username;
	    private String email;
	    private String password;
	    
	    private String role;
	    
		public String getRole() {
			return role;
		}
		public void setRole(String role) {
			this.role = role;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getUsername() {
			// TODO Auto-generated method stub
			return null;
		}
		public String getEmail() {
			// TODO Auto-generated method stub
			return null;
		}
		public CharSequence getPassword() {
			// TODO Auto-generated method stub
			return null;
		}
		@Override
		public String toString() {
			return "SignupRequest [username=" + username + ", email=" + email + ", password=" + password + ", role="
					+ role + "]";
		}
		
		
}
