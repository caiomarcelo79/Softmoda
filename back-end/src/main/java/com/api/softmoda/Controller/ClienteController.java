package com.api.softmoda.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.softmoda.Models.ClienteModel;
import com.api.softmoda.Services.ClienteService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;





@RestController
@CrossOrigin(origins = "*")
public class ClienteController {

  @Autowired
  private ClienteService cs;
  
  @PostMapping("/cliente/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody ClienteModel cm){
    return cs.cadastrar(cm);
  }

  @PutMapping("/cliente/alterar")
  public ResponseEntity<?> alterar(@RequestBody ClienteModel cm){
    return cs.alterar(cm);
  }
  
  @DeleteMapping("/cliente/remover/{id}")
  public ResponseEntity<?> remover(@PathVariable long id){
    return cs.remover(id);
  }
  
  @GetMapping("/cliente/listar")
  public Iterable<ClienteModel> listar(){
    return cs.listar();
  }
}
