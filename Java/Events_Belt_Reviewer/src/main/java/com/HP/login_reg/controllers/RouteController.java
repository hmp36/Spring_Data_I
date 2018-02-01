package com.HP.login_reg.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.HP.login_reg.services.UserService;
@Controller 

public class RouteController {
	private UserService us;
	
	public RouteController(UserService us) {
		this.us=us;
}
	
	@RequestMapping("")
	public String index(HttpServletRequest req,HttpSession s) {
//		if(!us.isValid(s)) {
			return "redirect/users/new";
//		}else{
//			return "redirect:/events"; 
		}
	}

