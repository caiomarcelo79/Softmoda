package com.api.softmoda.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.softmoda.Models.PromoModel;


@Repository
public interface PromoRepository extends JpaRepository<PromoModel, Long> {
  
}