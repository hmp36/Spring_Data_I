package com.HP.login_reg.controllers;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.HP.login_reg.models.Event;
import com.HP.login_reg.models.Message;
import com.HP.login_reg.models.User;
import com.HP.login_reg.services.EventService;
import com.HP.login_reg.services.MessageService;
import com.HP.login_reg.services.UserService;




@Controller
@RequestMapping("/events")
public class EventController {
	private UserService userService;
	private EventService eventService;
	private MessageService messageService;
	private Model model;
	private Object userStates;
	private long event_id;
	
	public EventController(EventService eventService) {
		this.eventService=eventService;
		this.messageService=messageService;
		this.userService=userService;
	}
	
	@RequestMapping("")
	public String events(@ModelAttribute("event")Event event,HttpSession session){
		long user_id =(long)session.getAttribute("id");
		User user = userService.findById(user_id);
		
		ArrayList<Event> userStates     = eventService.findByState(user.getState());
//		ArrayList<Event> notUserStates = eventService.findNotByState(user.getState());
		model.addAttribute("userStates",userStates);
//		model.addAttribute("notUserStates",notUserStates);
		
		ArrayList<Event> allEvents = (ArrayList<Event>)eventService.all();
		ArrayList<Event> notUserStates = new ArrayList <Event>();
		
		for(int i=0;i<allEvents.size();i++) {
			if( !allEvents.get(i).getState().equals( user.getState() ) )
				notUserStates.add( allEvents.get(i) );
		}		
		model.addAttribute("notUserStates",notUserStates);
		
		return "events";
	}
	@PostMapping("/new")
	public String create(@Valid @ModelAttribute ("event") Event event, BindingResult res){
		if(res.hasErrors()){return "events";}
	
		eventService.create(event);
		return "redirect:/events"; 
	}
 
	@RequestMapping("/{id}")
	public String showEvent(@PathVariable("id") long id,Model model,@ModelAttribute("message")Message message){
		model.addAttribute("event",(Event)eventService.findById(id));

		return"showEvent";
	}
	
	@PostMapping("/{id}/messages/new")
	public String comment(@ModelAttribute("message") Message message,BindingResult res, @PathVariable("id") long id) {
		if(res.hasErrors()) {return "redirect:/events/"+event_id;}
		
		Event e =eventService.findById(event_id);
		message.setEvent(e);
		messageService.create(message);
		return "redirect:/events/"+event_id;
		}
}	