package com.HP.login_reg.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.HP.login_reg.models.Event;
import com.HP.login_reg.models.Package;
import com.HP.login_reg.models.User;
import com.HP.login_reg.services.PackageService;
import com.HP.login_reg.services.UserService;

@Controller
public class UserController{
	
private UserService userService;
private Object hasErrors;

public UserController(UserService userService)	{
this.userService=userService;

}
	@RequestMapping("/")
	public String root() {
	return "redirect:/registration";	
	}
	
    @RequestMapping("/registration")
    public String register(RedirectAttributes flash,@Valid @ModelAttribute("user") User user, Model model) {
        
    	return "register";
    }
    
    @PostMapping("/registration")
    public String register(@Valid @ModelAttribute("user") User user, BindingResult result, Model model, HttpSession s) {
        if (result.hasErrors()) {
            return "register";
        }
        userService.create(user);
        s.setAttribute("id", user.getId());
        return "redirect:/selection";    
    }
    
    @RequestMapping("/dashboard")
    public String dashboard(Model model, HttpSession s) {
    	long id = (long) s.getAttribute("id");
    	User user = userService.findById(id);
    	
    	model.addAttribute("currentUser", user);
    	return "dashboard";
    }
    
    @RequestMapping("/selection")
    public String selection(Model model, HttpSession s) {
    	long id = (long) s.getAttribute("id");
    	User user = userService.findById(id);
    	
    	model.addAttribute("currentUser", user);
    	return "selection";
    }
    
    @RequestMapping("/profile")
    public String profile(Model model, HttpSession s) {
    	long id = (long) s.getAttribute("id");
    	User user = userService.findById(id);
    	
    	model.addAttribute("currentUser", user);
    	return "profile";
    }
    
    @PostMapping("/login")
    public String login(RedirectAttributes flash, HttpSession s, @RequestParam(value="email", required=false) String email, @RequestParam(value="password", required=false) String password, Model model) {
        
        User currentUser = userService.findByEmail(email);
        if (currentUser == null) {
        	flash.addFlashAttribute("userError","Must create user!");
        	return "redirect:/registration";
        }
        if (userService.isMatch(password,currentUser.getPassword())){
        	s.setAttribute("id", currentUser.getId());
        	return "redirect:/dashboard";
        }
        else {
        	flash.addFlashAttribute("passwordError","incorrect password!");
        }
        return "redirect:/registration";
    }
    
    @RequestMapping("/logout")
    public String logout(HttpSession s){
    s.setAttribute("id",null);
    return "redirect:/registration";
    }  	      


   @PostMapping("/selection")
	public <dueDate> String select(@Valid @ModelAttribute("packageType") User packageType, BindingResult res, HttpSession session, dueDate duedate){
		if(res.hasErrors()){return "package";}
		session.setAttribute("duedate",duedate);
        session.setAttribute("package",packageType);
    
  
		PackageService.select();
		return "redirect:/profile"; 
		}

    @PostMapping("/new")
	public String create(@Valid @ModelAttribute ("event") User PackageType, Package packageCost, BindingResult res){
		
			
		PackageType.create(PackageType);
		return "redirect:/dashboard"; 
	} 
    
    
}


