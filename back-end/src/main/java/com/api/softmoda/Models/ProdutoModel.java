package com.api.softmoda.Models;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "produtos")
@Getter
@Setter
public class ProdutoModel {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false, unique = true)
  private UUID id;

  @Column(name = "nome", nullable = false, unique = true)
  private String nome;

  @Column(name = "cor", nullable = false)
  private String cor;

  @Column(name = "tamanho", nullable = false)
  private String tamanho;

  @Column(name = "valor", nullable = false)
  private Float valor;

  @Column(name = "quantidade", nullable = false)
  private Integer quantidade;
  
}