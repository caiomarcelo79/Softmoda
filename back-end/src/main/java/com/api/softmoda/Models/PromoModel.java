package com.api.softmoda.Models;

import java.sql.Date;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;

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
@Table(name = "promo")
@Getter
@Setter
public class PromoModel {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false, unique = true)
  private UUID id;

  @OneToMany(mappedBy = "promoModel")
  private List<VendaModel> vendasModels;

  @Column(name = "nome", nullable = false)
  private String nome;

  @Column(name = "desconto", nullable = false)
  private Integer desconto;

  @Column(name = "condicoes", nullable = false)
  private String condicoes;

  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
  @Column(name = "validade", nullable = false)
  private Date validade;
  
}