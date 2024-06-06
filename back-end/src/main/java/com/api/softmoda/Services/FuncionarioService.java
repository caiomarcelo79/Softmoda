package com.api.softmoda.Services;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.api.softmoda.Models.ErroModel;
import com.api.softmoda.Models.FuncionarioModel;
import com.api.softmoda.Repository.FuncionarioRepository;

@Service
public class FuncionarioService {
  
  @Autowired
  private FuncionarioRepository fr;

  @Autowired
  private ErroModel em;

  public Iterable<FuncionarioModel> listar(){
    return fr.findAll();
  }

  
  public ResponseEntity<?> cadastrar(FuncionarioModel fm){
    if (fm.getNome().equals("") || fm.getCpf().equals("") || fm.getCargo().equals("") || fm.getSalario().equals("") || fm.getTelefone().equals("")) {
      em.setMensagem("Erro ao cadastrar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<FuncionarioModel>(fr.save(fm), HttpStatus.CREATED);
    }
  }

  public ResponseEntity<?> alterar(FuncionarioModel fm){
    if (fm.getNome().equals("") || fm.getCpf().equals("") || fm.getCargo().equals("") || fm.getSalario().equals("") || fm.getTelefone().equals("")) {
      em.setMensagem("Erro ao cadastrar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<FuncionarioModel>(fr.save(fm), HttpStatus.OK);
    }
  }

  public ResponseEntity<?> remover(UUID id){
    fr.deleteById(id);

    em.setMensagem("Nenhum erro ocorreu");
    return new ResponseEntity<ErroModel>(em, HttpStatus.OK);

  }


}
