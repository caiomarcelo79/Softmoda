package com.api.softmoda.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.api.softmoda.Models.ProdutoModel;
import com.api.softmoda.Services.ProdutoService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;





@RestController
@CrossOrigin(origins = "*")
public class ProdutoController {

  @Autowired
  private ProdutoService ps;
  
  @PostMapping("/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody ProdutoModel pm){
    return ps.cadastrar(pm);
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
