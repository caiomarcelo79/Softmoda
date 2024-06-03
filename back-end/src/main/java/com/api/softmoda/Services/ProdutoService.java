package com.api.softmoda.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.api.softmoda.Models.ErroModel;
import com.api.softmoda.Models.ProdutoModel;
import com.api.softmoda.Repository.ProdutoRepository;

@Service
public class ProdutoService {
  
  @Autowired
  private ProdutoRepository pr;

  @Autowired
  private ErroModel em;

  public Iterable<ProdutoModel> listar(){
    return pr.findAll();
  }

  
  public ResponseEntity<?> cadastrar(ProdutoModel pm){
    if (pm.getNome().equals("") || pm.getCor().equals("") || pm.getTamanho().equals("") || pm.getValor().equals(null) || pm.getQuantidade().equals(null)) {
      em.setMensagem("Erro ao cadastrar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<ProdutoModel>(pr.save(pm), HttpStatus.CREATED);
    }
  }


}
