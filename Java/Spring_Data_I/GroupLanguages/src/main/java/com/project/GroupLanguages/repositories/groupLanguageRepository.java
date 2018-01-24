package com.project.GroupLanguages.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.GroupLanguages.models.Crud;

@Repository
public interface groupLanguageRepository extends CrudRepository<Crud, Long>{

}