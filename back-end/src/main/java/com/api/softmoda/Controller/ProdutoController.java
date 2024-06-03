package com.api.softmoda.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.api.softmoda.Models.ProdutoModel;
import com.api.softmoda.Services.ProdutoService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;





@RestController
@CrossOrigin(origins = "*")
public class ProdutoController {

  @Autowired
  private ProdutoService ps;
  
  @PostMapping("/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody ProdutoModel pm){
    return ps.cadastrar(pm);
  }

  @PutMapping("/alterar")
  public ResponseEntity<?> alterar(@RequestBody ProdutoModel pm){
    return ps.alterar(pm);
  }
  
  @PutMapping("/remover")
  public ResponseEntity<?> remover(@PathVariable long id){
    return ps.remover(id);
  }
  
  @GetMapping("/listar")
  public Iterable<ProdutoModel> listar(){
    return ps.listar();
  }

  @GetMapping("/")
  public String rota(){
    return "Funcionando";
  }
  
  

}
