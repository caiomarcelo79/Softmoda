package com.api.softmoda.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.softmoda.Models.VendaModel;
import com.api.softmoda.Services.VendaService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;





@RestController
@CrossOrigin(origins = "*")
public class VendaController {

  @Autowired
  private VendaService vs;
  
  @PostMapping("/venda/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody VendaModel vm){
    return vs.cadastrar(vm);
  }

  @PutMapping("/venda/alterar")
  public ResponseEntity<?> alterar(@RequestBody VendaModel vm){
    return vs.alterar(vm);
  }
  
  @DeleteMapping("/venda/remover/{id}")
  public ResponseEntity<?> remover(@PathVariable long id){
    return vs.remover(id);
  }
  
  @GetMapping("/venda/listar")
  public Iterable<VendaModel> listar(){
    return vs.listar();
  }
}
