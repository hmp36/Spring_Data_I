package com.HP.login_reg.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.HP.login_reg.models.Message;
import com.HP.login_reg.repositories.MessageRepository;
@Service 
public class MessageService {
	private MessageRepository messageRepository;
	
	public MessageService(MessageRepository messageRepository) {
		this.messageRepository=messageRepository;
	}
	public void create(Message message) {
		messageRepository.save(message);
    }
public ArrayList<Message> all(){
	return (ArrayList<Message>)messageRepository.findAll();
}
	
public Message findById(long id) {
	return messageRepository.findOne(id);
}
public void destroy(long id) {
	messageRepository.delete(id);
	}
public void update(Message message) {
	create(message);
	}
}