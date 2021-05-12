package com.example.testapi.service;

import com.example.testapi.model.Eintrag;
import com.example.testapi.repository.EintragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Service
@Transactional
public class EintragService {
    @Autowired
    private EintragRepository eintragRepository;
    public List<Eintrag> listAllEintraege(){
        return eintragRepository.findAll();
    }
    public Eintrag getEintrag(Long id){
        return eintragRepository.findById(id).get();
    }
    public List<Eintrag> getEintraegeByKategorie(String kategorie){
        return eintragRepository.findByKategorie(kategorie); }


    public List<Eintrag> getEintraegeByIds(List<Long> ids){
        return eintragRepository.findByIdIn(ids);}

    public List<Eintrag> getEintraegeByKategorien(List<String> kategorien){
        return eintragRepository.findByKategorieIn(kategorien);}

    public List<Eintrag> getEintraegeByKriterien(){
        return  eintragRepository.findByKriterien();
    }

    public List<Eintrag> getEintraegeByKrit(String krit){return eintragRepository.findByKrit(krit);}

    public List<Eintrag> getEintraegeByKrits(List<String> krits){ return  eintragRepository.findByKrits(krits);}
    //public List<Eintrag> getEintraegeByKriterien(List<String> kriterien){return eintragRepository.findAllbyKriterien(kriterien);}

    public List<Eintrag> getEintraegeByKritss(List<String> kritss){return  eintragRepository.findEintragbyKritss(kritss);}
    public List<Eintrag> getEintraegeByKritssAndKriterien(List<String> kritss, List<String> kriterien){return  eintragRepository.findEintragbyKritssAndKategorien(kritss,kriterien);}

    public List<Eintrag> findAllEintraege(){return  eintragRepository.findAllEintraege();}

    public Eintrag saveEintrag(Eintrag eintrag){return eintragRepository.save(eintrag);}
}
