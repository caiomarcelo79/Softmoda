package com.api.softmoda.Models;

import java.util.List;
import java.util.UUID;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "funcionario")
@Getter
@Setter
public class FuncionarioModel {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false, unique = true)
  private UUID id;

  @OneToMany(mappedBy = "funcionarioModel")
  private List<VendaModel> vendasModels;

  @Column(name = "nome", nullable = false)
  private String nome;

  @Column(name = "cpf", nullable = false, unique = true)
  private String cpf;

  @Column(name = "cargo", nullable = false, unique = true)
  private String cargo;

  @Column(name = "salario", nullable = false)
  private Float salario;

  @Column(name = "telefone", nullable = false)
  private String telefone;
  
}