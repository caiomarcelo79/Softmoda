package com.api.softmoda.Models;

import java.sql.Date;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "vendas")
@Getter
@Setter
public class VendaModel {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false, unique = true)
  private UUID id;

  @Column(name = "nome_produto", nullable = false)
  private String nome_produto;

  @Column(name = "cpf_cliente", nullable = false)
  private String cpf_cliente;

  @Column(name = "cpf_funcionario", nullable = false)
  private String cpf_funcionario;
  
  @Column(name = "nome_cupom", nullable = false)
  private String nome_cupom;

  @Column(name = "forma_pagamento", nullable = false)
  private String forma_pagamento;

  @Column(name = "valor_compra", nullable = false)
  private Float valor_compra;

  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
  @Column(name = "data_compra", nullable = false)
  private Date data_compra;
  
}