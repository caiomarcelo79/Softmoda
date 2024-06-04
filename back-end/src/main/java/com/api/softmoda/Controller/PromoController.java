package com.api.softmoda.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.softmoda.Models.PromoModel;
import com.api.softmoda.Services.PromoService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;





@RestController
@CrossOrigin(origins = "*")
public class PromoController {

  @Autowired
  private PromoService ps;
  
  @PostMapping("/promo/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody PromoModel pm){
    return ps.cadastrar(pm);
  }

  @PutMapping("/promo/alterar")
  public ResponseEntity<?> alterar(@RequestBody PromoModel pm){
    return ps.alterar(pm);
  }
  
  @DeleteMapping("/promo/remover/{id}")
  public ResponseEntity<?> remover(@PathVariable long id){
    return ps.remover(id);
  }
  
  @GetMapping("/promo/listar")
  public Iterable<PromoModel> listar(){
    return ps.listar();
  }
}
