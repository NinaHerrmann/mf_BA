package com.example.testapi.controller;

import com.example.testapi.model.Eintrag;
import com.example.testapi.repository.EintragRepository;
import com.example.testapi.service.EintragService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.SecondaryTable;
import javax.validation.Valid;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;

@RestController
@RequestMapping("/eintraege")
public class EintragController {
    @Autowired
    EintragService eintragService;



    @GetMapping("/alle")
    public List<Eintrag> list() {
        return eintragService.listAllEintraege();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Eintrag> get(@PathVariable Long id) {
        try {
            Eintrag eintrag = eintragService.getEintrag(id);
            return new ResponseEntity<Eintrag>(eintrag, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Eintrag>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/kategorien/{kategorien}")
    public List<Eintrag> getKategorien(@PathVariable List<String> kategorien) {
        return eintragService.getEintraegeByKategorien(kategorien);
    }

    // für Favoriten-Array
    @GetMapping("/idliste/{ids}")
    public List<Eintrag> get(@PathVariable List<Long> ids) {
        return eintragService.getEintraegeByIds(ids);
    }



    // kritss werden mit and verknüpft
    @GetMapping("/test/kriterien/{kritss}")
    public List<Eintrag> getMe(@PathVariable List<String> kritss){
        return eintragService.getEintraegeByKritss(kritss);}

    // kategorien sind or // kriterien and
    @GetMapping("/test/{kategorien}/{kritss}")
    public List<Eintrag> getMeee(@PathVariable List<String> kritss, @PathVariable List<String> kategorien){
        return eintragService.getEintraegeByKritssAndKriterien(kritss,kategorien);}


    // Grundgerüst für Admin-Interface steht bereits, aber bisher noch Problem bei Aufruf Kriterium mit einer übergebenen ID (mangelnde Zeit)
    @PostMapping("/post/neuerEintrag")
    public Eintrag neuerEintragHinzufügen(@Valid @RequestBody Eintrag eintragNeu){
        return eintragService.saveEintrag(eintragNeu);
    }
}