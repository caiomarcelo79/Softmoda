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
@Table(name = "fornecedor")
@Getter
@Setter
public class FornecedorModel {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false, unique = true)
  private UUID id;

  @Column(name = "cnpj", nullable = false, unique = true)
  private String cnpj;

  @Column(name = "razao_social", nullable = false)
  private String razao_social;

  @Column(name = "fantasia", nullable = false)
  private String fantasia;

  @Column(name = "endereco", nullable = false)
  private String endereco;
  
}