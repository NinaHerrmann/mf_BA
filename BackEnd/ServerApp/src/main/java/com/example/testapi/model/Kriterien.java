package com.example.testapi.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="kriterien")
@JsonDeserialize
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Kriterien {
    @Id
    @GeneratedValue
    private Long id;
    private String krit_name;
    @ManyToMany(mappedBy = "krits")
    @JsonIgnore
    List<Eintrag> eintraege;


    public Kriterien(){}

    public Kriterien(Long id, String krit_name, List<Eintrag> eintraege){
        this.id = id;
        this.krit_name = krit_name;
        this.eintraege = eintraege;
    }

    public Kriterien(Long id){
        ;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getKrit_name(){
        return krit_name;
    }

    public void setKrit_name(String krit_name){
        this.krit_name=krit_name;
    }

    public List<Eintrag> getEintraege() {
        return eintraege;
    }

    public void setEintraege(List<Eintrag> eintraege) {
        this.eintraege = eintraege;
    }
}