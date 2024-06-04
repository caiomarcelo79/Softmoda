package com.api.softmoda.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.api.softmoda.Models.ErroModel;
import com.api.softmoda.Models.FornecedorModel;
import com.api.softmoda.Repository.FornecedorRepository;

@Service
public class FornecedorService {
  
  @Autowired
  private FornecedorRepository fr;

  @Autowired
  private ErroModel em;

  public Iterable<FornecedorModel> listar(){
    return fr.findAll();
  }

  
  public ResponseEntity<?> cadastrar(FornecedorModel fm){
    if (fm.getCnpj().equals("") || fm.getRazao_social().equals("") || fm.getFantasia().equals("") || fm.getEndereco().equals("")) {
      em.setMensagem("Erro ao cadastrar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<FornecedorModel>(fr.save(fm), HttpStatus.CREATED);
    }
  }

  public ResponseEntity<?> alterar(FornecedorModel fm){
    if (fm.getCnpj().equals("") || fm.getRazao_social().equals("") || fm.getFantasia().equals("") || fm.getEndereco().equals("")) {
      em.setMensagem("Erro ao cadastrar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<FornecedorModel>(fr.save(fm), HttpStatus.OK);
    }
  }

  public ResponseEntity<?> remover(long id){
    fr.deleteById(id);

    em.setMensagem("Nenhum erro ocorreu");
    return new ResponseEntity<ErroModel>(em, HttpStatus.OK);

  }


}
