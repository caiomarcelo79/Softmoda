package com.api.softmoda.Models;

import java.sql.Date;

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
@Table(name = "cliente")
@Getter
@Setter
public class ClienteModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", nullable = false, unique = true)
  private Long id;

  @Column(name = "nome", nullable = false)
  private String nome;

  @Column(name = "email", nullable = false, unique = true)
  private String email;

  @Column(name = "cpf", nullable = false, unique = true)
  private String cpf;

  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
  @Column(name = "data_nascimento", nullable = false)
  private Date data_nascimento;

  @Column(name = "telefone", nullable = false)
  private String telefone;
  
}