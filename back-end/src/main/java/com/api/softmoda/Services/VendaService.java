package com.api.softmoda.Services;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.api.softmoda.Models.ErroModel;
import com.api.softmoda.Models.VendaModel;
import com.api.softmoda.Repository.VendaRepository;

@Service
public class VendaService {
  
  @Autowired
  private VendaRepository vr;

  @Autowired
  private ErroModel em;

  public Iterable<VendaModel> listar(){
    return vr.findAll();
  }

  
  public ResponseEntity<?> cadastrar(VendaModel vm){
    if (vm.getNome_produto().equals("") || vm.getCpf_cliente().equals("") || vm.getCpf_funcionario().equals("") || vm.getNome_cupom().equals("") || vm.getForma_pagamento().equals(null) || vm.getValor_compra().equals(null) || vm.getData_compra().equals(null)) {
      em.setMensagem("Erro ao cadastrar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<VendaModel>(vr.save(vm), HttpStatus.CREATED);
    }
  }

  public ResponseEntity<?> alterar(VendaModel vm){
    if (vm.getNome_produto().equals("") || vm.getCpf_cliente().equals("") || vm.getCpf_funcionario().equals("") || vm.getNome_cupom().equals("") || vm.getForma_pagamento().equals(null) || vm.getValor_compra().equals(null) || vm.getData_compra().equals(null)) {
      em.setMensagem("Erro ao alterar");
      return new ResponseEntity<ErroModel>(em, HttpStatus.BAD_REQUEST);
    }else{
      em.setMensagem("Nenhum erro ocorreu");
      return new ResponseEntity<VendaModel>(vr.save(vm), HttpStatus.OK);
    }
  }

  public ResponseEntity<?> remover(UUID id){
    vr.deleteById(id);

    em.setMensagem("Nenhum erro ocorreu");
    return new ResponseEntity<ErroModel>(em, HttpStatus.OK);

  }


}
