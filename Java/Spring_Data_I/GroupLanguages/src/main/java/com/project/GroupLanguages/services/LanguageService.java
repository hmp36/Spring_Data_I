package com.project.GroupLanguages.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.project.GroupLanguages.models.Crud;
import com.project.GroupLanguages.repositories.groupLanguageRepository;

@Service
public class LanguageService {
	private groupLanguageRepository groupLanguageRepository;
	public LanguageService(groupLanguageRepository groupLanguageRepository) {
		this.groupLanguageRepository = groupLanguageRepository;
	}
	
	public ArrayList<Crud> allLanguages(){
		return (ArrayList<Crud>) groupLanguageRepository.findAll();
	}
	public void addLanguage(Crud language) {
		groupLanguageRepository.save(language);
	}
	public void destroyLanguage(Long id) {
		groupLanguageRepository.delete(id);
	}
	
	public Crud findLanguageById(Long id) {
		return groupLanguageRepository.findOne(id);
	}
	public void updateLanguage(Crud language) {
		groupLanguageRepository.save(language);
	}
	
	


}