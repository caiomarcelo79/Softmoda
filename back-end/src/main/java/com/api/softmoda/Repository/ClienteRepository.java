package com.api.softmoda.Repository;



import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.softmoda.Models.ClienteModel;


@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel, UUID> {
  
}
