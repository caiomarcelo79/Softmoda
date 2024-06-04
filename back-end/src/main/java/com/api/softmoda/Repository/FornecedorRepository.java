package com.api.softmoda.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.softmoda.Models.FornecedorModel;


@Repository
public interface FornecedorRepository extends JpaRepository<FornecedorModel, Long> {
  
}