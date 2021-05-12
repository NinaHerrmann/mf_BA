package com.example.testapi.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="Eintrag")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Eintrag {
    @Id
    @GeneratedValue
    @Column(name = "id" )
    private Long id;
    @NotNull
    private String name;
    @NotNull
    private String kategorie;
    private String strasse;
    private String hausnummer;
    private Long plz;
    private double latitude;
    private double longitude;
    private String beschreibung;
    private String link;
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @ManyToMany
    @JoinTable(
            name="eint_krit",
            joinColumns = @JoinColumn(name="e_id"),
            inverseJoinColumns = @JoinColumn(name= "krit_id"))
    List<Kriterien> krits;
    public Eintrag(){

    }
    public Eintrag(String name, String kategorie, String strasse, Long plz , double latitude, double longitude, String beschreibung, String link , List<Kriterien> krits, String hausnummer, Date date ){
        //this.id = id;
        this.name=name;
        this.kategorie=kategorie;
        this.strasse=strasse;
        this.plz=plz;
        this.latitude=latitude;
        this.longitude=longitude;
        this.beschreibung=beschreibung;
        this.link=link;
        this.krits= krits;
        this.hausnummer=hausnummer;
        this.date=date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getKategorie() {
        return kategorie;
    }

    public void setKategorie(String kategorie) {
        this.kategorie = kategorie;
    }

    public String getStrasse() {
        return strasse;
    }

    public void setStrasse(String strasse) {
        this.strasse = strasse;
    }

    public Long getPlz() {
        return plz;
    }

    public void setPlz(Long plz) {
        this.plz = plz;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }


    public List<Kriterien> getKrits() {
        return krits;
    }

    public void setKrits(List<Kriterien> krits) {
        this.krits = krits;
    }

    public String getHausnummer() {
        return hausnummer;
    }

    public void setHausnummer(String hausnummer) {
        hausnummer = hausnummer;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
