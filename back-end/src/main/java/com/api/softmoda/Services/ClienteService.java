package com.api.softmoda.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.api.softmoda.Models.ClienteModel;
import com.api.softmoda.Models.ErroModel;
import com.api.softmoda.Repository.ClienteRepository;

@Service
public class ClienteService {
  
  @Autowired
  private ClienteRepository cr;

  @Autowired
  private ErroModel em;

  public Iterable<ClienteModel> listar(){
    return cr.findAll();
  }

  
  public ResponseEntity<?> cadastrar(ClienteModel cm){
    if (cm.getNome().equals("") || cm.getEmail().equals("") || cm.getCpf().equals("") || cm.getData_nascimento().equals("") || cm.getTelefone().equals("")) {
      em.setMensagem("Erro ao cadastrar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<ClienteModel>(cr.save(cm), HttpStatus.CREATED);
    }
  }

  public ResponseEntity<?> alterar(ClienteModel cm){
    if (cm.getNome().equals("") || cm.getEmail().equals("") || cm.getCpf().equals("") || cm.getData_nascimento().equals("") || cm.getTelefone().equals("")) {
      em.setMensagem("Erro ao alterar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<ClienteModel>(cr.save(cm), HttpStatus.OK);
    }
  }

  public ResponseEntity<?> remover(long id){
    cr.deleteById(id);

    em.setMensagem("Nenhum erro ocorreu");
    return new ResponseEntity<ErroModel>(em, HttpStatus.OK);

  }


}
