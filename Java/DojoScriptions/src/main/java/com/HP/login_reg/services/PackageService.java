package com.HP.login_reg.services;

import org.springframework.stereotype.Service;

import com.HP.login_reg.models.Package;
import com.HP.login_reg.models.User;
import com.HP.login_reg.repositories.PackageRepository;

@Service
public class PackageService {
	private PackageRepository packageRepository;

	public PackageRepository getPackageRepository() {
		return packageRepository;
	}

	public void setPackageRepository(PackageRepository packageRepository) {
		this.packageRepository = packageRepository;
	}

	public static void select() {
		// TODO Auto-generated method stub
	}

	public void create(Package package){
		packageRepository.save(package);
		
	}
		
}