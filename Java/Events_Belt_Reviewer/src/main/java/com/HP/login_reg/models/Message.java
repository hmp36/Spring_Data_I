package com.HP.login_reg.models;

import java.util.Date;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Message {
	@Id
	@GeneratedValue
	private long id;
	
	

	@Size(min=8,max=255,message="Comments must be between 8-255 characters.")
	private String text;

	@DateTimeFormat(pattern="MM:dd;yyyy HH:mm:ss")
	private Date createdAt;

	@DateTimeFormat(pattern="MM:dd:yyyy HH:mm:ss")
	private Date updatedAt;

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="event_id")
	private Event event;

	@PrePersist
	public void onCreate() {this.createdAt = new Date();}
	@PreUpdate
	public void onUpdate() {this.updatedAt = new Date();}
	public long getId() {
	return id;
	}
	public Event getEvent() {
	return event;
	}
	public void setEvent(Event event) {
	this.event = event;
	}
	public void setId(invalid invalid) {
	this.id = invalid;
	}
	public String getText() {
	return text;
	}
	public void setText(String text) {
	this.text = text;
	}
	public Date getCreatedAt() {
	return createdAt;
	}

	public Message() {
	this.createdAt = new Date();
	this.updatedAt = new Date();
	}

	public void setCreatedAt(Date createdAt) {
	this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
	return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
	this.updatedAt = updatedAt;
	}

}


