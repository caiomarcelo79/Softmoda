package com.api.softmoda.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.api.softmoda.Models.ErroModel;
import com.api.softmoda.Models.PromoModel;
import com.api.softmoda.Repository.PromoRepository;

@Service
public class PromoService {
  
  @Autowired
  private PromoRepository pr;

  @Autowired
  private ErroModel em;

  public Iterable<PromoModel> listar(){
    return pr.findAll();
  }

  
  public ResponseEntity<?> cadastrar(PromoModel pm){
    if (pm.getNome().equals("") || pm.getDesconto().equals(null) || pm.getCondicoes().equals("") || pm.getValidade().equals(null)) {
      em.setMensagem("Erro ao cadastrar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<PromoModel>(pr.save(pm), HttpStatus.CREATED);
    }
  }

  public ResponseEntity<?> alterar(PromoModel pm){
    if (pm.getNome().equals("") || pm.getDesconto().equals(null) || pm.getCondicoes().equals("") || pm.getValidade().equals(null)) {
      em.setMensagem("Erro ao cadastrar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<PromoModel>(pr.save(pm), HttpStatus.OK);
    }
  }

  public ResponseEntity<?> remover(long id){
    pr.deleteById(id);

    em.setMensagem("Nenhum erro ocorreu");
    return new ResponseEntity<ErroModel>(em, HttpStatus.OK);

  }


}
