package com.HP.login_reg.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Size;

@Entity
public class Something{
    @Id
    @GeneratedValue
    private Long id;
      
               
    @Size(min=1,max=255,message="You must choose a package!")
    private String PackageType;
    
    private String PackageCost; 
   
    
    
    
//    @OneToMany(mappedBy="something", fetch=FetchType.LAZY)
//    private List<User> users;
    
        
    
    
//    public List<User> getUsers() {
//		return users;
//	}
//	public void setUsers(List<User> users) {
//		this.users = users;
//	}
    
    
    public String getPackageType() {
		return PackageType;
	}
	public void setPackageType(String packageType) {
		PackageType = packageType;
	}
		public String getPackageCost() {
			return PackageCost;
		}
		public void setPackageCost(String packageCost) {
			PackageCost = packageCost;
		}
		
    
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}
	
}

//	public String getDueDay() {
//		return DueDay;
//	}
//
//
//	public void setDueDay(String dueDay) {
//		DueDay = dueDay;
//	}
//
//
//	public String getPackage() {
//		return Package;
//	}
//
//
//	public void setPackage(String package) {
//		package = Package;
//	}



 
    