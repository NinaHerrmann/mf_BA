package com.example.testapi.repository;

import com.example.testapi.model.Eintrag;

import java.util.List;
import java.util.Set;

public interface EintragRepositoryCustom {
    List<Eintrag> findEintragbyKritss(List<String> kritss);
    List<Eintrag> findEintragbyKritssAndKategorien(List<String> kritss, List<String > kategorien);

}
