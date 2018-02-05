package com.HP.login_reg.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.HP.login_reg.models.Role;

@Repository 												
public interface RoleRepository extends CrudRepository<Role,Long>{
		
}
