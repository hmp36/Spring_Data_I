package com.HP.login_reg.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.HP.login_reg.models.Event;
import com.HP.login_reg.repositories.EventRepository;

@Service
public class EventService {
	private EventRepository eventRepository;
		

	
	public EventService(EventRepository eventRepository) {
		this.eventRepository=eventRepository;
	}
	public void create(Event event) {
		eventRepository.save(event);
    }
	public ArrayList<Event> all(){
		return (ArrayList<Event>)eventRepository.findAll();
	}
	
	public Event findById(long id) {
		return eventRepository.findOne(id);
	}
	public void destroy(long id) {
		eventRepository.delete(id);
	}
	public void update(Event event) {
		create(event);
	}
	public ArrayList<Event> findByState(String state){
		return (ArrayList<Event>)eventRepository.findByState(state);
	}
	public ArrayList<Event> findNotByState(String state){
		return (ArrayList<Event>)eventRepository.findNotByState(state);
	
	}
}