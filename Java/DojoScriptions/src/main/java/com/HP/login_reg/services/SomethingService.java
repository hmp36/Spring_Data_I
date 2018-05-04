package com.HP.login_reg.services;

import org.springframework.stereotype.Service;

import com.HP.login_reg.models.Something;
import com.HP.login_reg.repositories.SomethingRepository;

@Service
public class SomethingService {
	private static SomethingRepository somethingRepository;

	public SomethingRepository getPackageRepository() {
		return somethingRepository;
	}

	public void setPackageRepository(SomethingRepository somethingRepository) {
		SomethingService.somethingRepository = somethingRepository;
	}

	public static void select() {
	
	}

	public static void create(Something thingsome){
		somethingRepository.save(thingsome);
		
	}
		


	
}