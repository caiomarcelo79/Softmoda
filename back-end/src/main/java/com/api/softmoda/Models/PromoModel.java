package com.api.softmoda.Models;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "promo")
@Getter
@Setter
public class PromoModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", nullable = false, unique = true)
  private Long id;

  @Column(name = "nome", nullable = false)
  private String nome;

  @Column(name = "desconto", nullable = false)
  private Integer desconto;

  @Lob
  @Column(name = "condicoes", nullable = false, length = 512)
  private String condicoes;

  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
  @Column(name = "validade", nullable = false)
  private Date validade;
  
}