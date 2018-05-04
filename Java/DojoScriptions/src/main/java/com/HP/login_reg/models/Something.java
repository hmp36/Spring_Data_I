package com.HP.login_reg.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Size;

@Entity
public class Something{
    @Id
    @GeneratedValue
    private Long id;
      
               
    @Size(min=1,max=255,message="You must choose a package!")
    private String PackageType;
    
    private String PackageCost; 
   

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "users_somethings", 
        joinColumns = @JoinColumn(name = "something_id"), 
        inverseJoinColumns = @JoinColumn(name = "user_id")
)
    
    
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



 
    