package com.api.softmoda.Repository;



import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.softmoda.Models.VendaModel;


@Repository
public interface VendaRepository extends JpaRepository<VendaModel, UUID> {
  
}
