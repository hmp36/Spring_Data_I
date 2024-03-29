package com.HP.login_reg.controllers;

import java.util.ArrayList;
import java.util.List;
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
	
	private Object userStates;
	private long event_id;
	
	public EventController(EventService eventService, UserService userService, MessageService messageService) {
		this.eventService = eventService;
		this.messageService = messageService;
		this.userService = userService;
	}
	
	@RequestMapping("")
	public String events(@ModelAttribute("event")Event event,HttpSession session,Model model){
		
		long user_id =(long)session.getAttribute("id");
		

		User user = userService.findById(user_id);
		System.out.println(user);
		
		ArrayList<Event> userStates = eventService.findByState(user.getState());
		model.addAttribute("userStates",userStates);
        		
		ArrayList<Event> allEvents = (ArrayList<Event>)eventService.all();
		ArrayList<Event> notUserStates = new ArrayList <Event>();
		
		
		for(int i=0;i<allEvents.size();i++) {
			if( !allEvents.get(i).getState().equals(user.getState() ) ) 
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
	public String comment(@Valid @ModelAttribute("message") Message message,BindingResult res, @PathVariable("event_id") long event_id) {
		if(res.hasErrors()) {return "showEvent";}
		message.setId(null);
		messageService.create(message);
		
		Event e =eventService.findById(event_id);
		
		message.setEvent(e);
		
		eventService.create(e);
		


		return "redirect:/events/"+event_id;
		}
	
	@RequestMapping("/{id}/join")
    public String join(@PathVariable("id") long event_id, HttpSession session) {
		Event e = (Event)eventService.findById(event_id);
		long user_id = (long)session .getAttribute("id");
		User u = (User)userService.findById(user_id);
		System.out.println(u);
		List<User> users = e.getUsers();
		System.out.println(users);
		if(users.size() == 0) {
			System.out.println("**");	
		
			users = new ArrayList<User>();
			users.add( u );
			e.setUsers(users);
			eventService.update(e);}
		else {
			if(!users.contains(u)){
				users.add( u );
				e.setUsers(users);
				eventService.update(e);}
			}
		return "redirect:/events/"+event_id;
	}

	public long getEvent_id() {
		return event_id;
	}

	public void setEvent_id(long event_id) {
		this.event_id = event_id;
	}

	public Object getUserStates() {
		return userStates;
	}

	public void setUserStates(Object userStates) {
		this.userStates = userStates;
	}
	
	    		
		
			
		
		}	
	


