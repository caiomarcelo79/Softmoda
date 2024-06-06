package com.api.softmoda.Controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.softmoda.Models.FornecedorModel;
import com.api.softmoda.Services.FornecedorService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;





@RestController
@CrossOrigin(origins = "*")
public class FornecedorController {

  @Autowired
  private FornecedorService fs;
  
  @PostMapping("/fornecedor/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody FornecedorModel fm){
    return fs.cadastrar(fm);
  }

  @PutMapping("/fornecedor/alterar")
  public ResponseEntity<?> alterar(@RequestBody FornecedorModel fm){
    return fs.alterar(fm);
  }
  
  @DeleteMapping("/fornecedor/remover/{id}")
  public ResponseEntity<?> remover(@PathVariable UUID id){
    return fs.remover(id);
  }
  
  @GetMapping("/fornecedor/listar")
  public Iterable<FornecedorModel> listar(){
    return fs.listar();
  }
}
