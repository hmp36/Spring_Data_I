package com.HP.login_reg.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.HP.login_reg.models.Something;

@Repository 												
public interface SomethingRepository extends CrudRepository<Something,Long>{

	
		
}
