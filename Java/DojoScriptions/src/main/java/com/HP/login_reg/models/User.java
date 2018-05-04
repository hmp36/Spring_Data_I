package com.HP.login_reg.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Transient;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class User{
    @Id
    @GeneratedValue
    private Long id;
    @Size(min=1,max=255,message="First name must be between 1-255 characters")
    private String firstName;
   
    @Size(min=1,max=255,message="Last name must be between 1-255 characters")
    private String lastName;
            
    @Size(min=1,max=255,message="Email must be between 1-255 characters")
    private String email;
            
    @Size(min=1,max=255,message="Password must be between 1-255 characters")
    private String password;
    
    @Size(min=1,max=255,message="City must be between 1-255 characters")
    private String city;
    
    @Size(min=2,max=3, message="State must be at least 2 characters")
    private String state;
    
    private String AmountDue;
      
    public String getAmountDue() {
		return AmountDue;
	}
	public void setAmountDue(String amountDue) {
		AmountDue = amountDue;
	}
	public String getdueDate() {
		return dueDate;
	}
	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}
	 
	
//	public String getUsers_roles() {
//		return users_roles;
//	}
//	public void setUsers_roles(String users_roles) {
//		this.users_roles = users_roles;
//	}
	@Size(min=1,max=31,message="You must choose a date")
    private String dueDate  ;
   
   
    
//    @Transient
    private String passwordConfirmation;
//    @Column(updatable=false)
    @DateTimeFormat(pattern="MM:dd:yyyy HH:mm:ss")
    private Date createdAt;
    @DateTimeFormat(pattern="MM:dd:yyyy HH:mm:ss")
    private Date updatedAt;
   
    
//    @ManyToOne(fetch=FetchType.LAZY)
//    @JoinColumn(name="something_id")
//    private Something something;
    
    
    
//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(
//        name = "users_roles", 
//        joinColumns = @JoinColumn(name = "user_id"), 
//        inverseJoinColumns = @JoinColumn(name = "role_id"))
    
//    
//    private List<Role> roles;
//	public String users_roles; // what do?
//	private Something packagetype;
    
    public User() {
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
		
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getPasswordConfirmation() {
        return passwordConfirmation;
    }
    public void setPasswordConfirmation(String passwordConfirmation) {
        this.passwordConfirmation = passwordConfirmation;
    }
    public Date getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
    public Date getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
//    public List<Role> getRoles() {
//        return roles;
//    }
//    public void setRoles(List<Role> roles) {
//        this.roles = roles;
//    }
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
//    public Something getPackageType() {
//        return packagetype;
//    }
//    public void setPackageType(Something packagetype) {
//        this.packagetype = packagetype;
//    }
//	public Something getSomething() {
//		return something;
//	}
//	public void setSomething(Something something) {
//		this.something = something;
//	}
//	public Something getPackagetype() {
//		return packagetype;
//	}
//	public void setPackagetype(Something packagetype) {
//		this.packagetype = packagetype;
//	}
	public String getDueDate() {
		return dueDate;
	}
		
	
}


