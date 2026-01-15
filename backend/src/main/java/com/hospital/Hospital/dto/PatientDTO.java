package com.hospital.Hospital.dto;

public class PatientDTO {

	private int id;
    private String fullName;
    private String age;
    private String email;
    private String password;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
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
	public PatientDTO(int id, String fullName, String age, String email, String password) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.age = age;
		this.email = email;
		this.password = password;
	}
	public PatientDTO() {
		super();
	}
	@Override
	public String toString() {
		return "PatientDTO [id=" + id + ", fullName=" + fullName + ", age=" + age + ", email=" + email + ", password="
				+ password + "]";
	}
    
    
	
}
