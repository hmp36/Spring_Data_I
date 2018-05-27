package com.HP.login_reg.repositories;
import java.util.ArrayList;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.HP.login_reg.models.Event;
@Repository
public interface EventRepository extends CrudRepository<Event,Long>{
	ArrayList<Event>findByState(String state);

	ArrayList<Event> findNotByState(String state);
	
//	@Query(value="SELECT * FROM events WHERE state != ?1",nativeQuery=true)
//	ArrayList<Event>findNOTByState(String state);
//	
	
	
}
