package com.api.softmoda.Models;

import java.sql.Date;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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

  @ManyToOne
  @JoinColumn(name = "id_produto", nullable = true)
  private ProdutoModel produtoModel;


  @ManyToOne
  @JoinColumn(name = "id_cliente", nullable = true)
  private ClienteModel clienteModel;

  @ManyToOne
  @JoinColumn(name = "id_funcionario", nullable = true)
  private FuncionarioModel funcionarioModel;
  
  @ManyToOne
  @JoinColumn(name = "id_cupom", nullable = true)
  private PromoModel promoModel;

  @Column(name = "forma_pagamento", nullable = false)
  private String forma_pagamento;

  @Column(name = "valor_compra", nullable = false)
  private String valor_compra;

  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
  @Column(name = "data_compra", nullable = false)
  private Date data_compra;
  
}