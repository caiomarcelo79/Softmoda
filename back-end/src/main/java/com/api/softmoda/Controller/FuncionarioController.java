package com.api.softmoda.Controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.softmoda.Models.FuncionarioModel;
import com.api.softmoda.Services.FuncionarioService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;





@RestController
@CrossOrigin(origins = "*")
public class FuncionarioController {

  @Autowired
  private FuncionarioService fs;
  
  @PostMapping("/funcionario/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody FuncionarioModel fm){
    return fs.cadastrar(fm);
  }

  @PutMapping("/funcionario/alterar")
  public ResponseEntity<?> alterar(@RequestBody FuncionarioModel fm){
    return fs.alterar(fm);
  }
  
  @DeleteMapping("/funcionario/remover/{id}")
  public ResponseEntity<?> remover(@PathVariable UUID id){
    return fs.remover(id);
  }
  
  @GetMapping("/funcionario/listar")
  public Iterable<FuncionarioModel> listar(){
    return fs.listar();
  }
}
