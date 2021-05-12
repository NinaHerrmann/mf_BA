package com.example.testapi.repository;

import com.example.testapi.model.Eintrag;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class EintragRepositoryCustomImpl implements EintragRepositoryCustom{
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Eintrag> findEintragbyKritss(List<String> kritss){
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Eintrag> query = cb.createQuery(Eintrag.class);
        Root<Eintrag> eintrag = query.from(Eintrag.class);


        List<Predicate> predicates = new ArrayList<>();
        for (String krits:kritss){
            predicates.add((cb.like(eintrag.join("krits").get("krit_name"),krits)));
        }
        query.select(eintrag)
                .where(cb.and(predicates.toArray(new Predicate[predicates.size()])));

        return entityManager.createQuery(query)
                .getResultList();


    }
    @Override
    public List<Eintrag> findEintragbyKritssAndKategorien(List<String> kritss, List<String> kategorien){
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Eintrag> query = cb.createQuery(Eintrag.class);
        Root<Eintrag> eintrag = query.from(Eintrag.class);


        List<Predicate> predicates = new ArrayList<>();
        for (String krits:kritss){
            predicates.add((cb.like(eintrag.join("krits").get("krit_name"),krits)));
        }

        Predicate katPred = eintrag.get("kategorie").in(kategorien);
        query.select(eintrag)
                .where(cb.and(katPred,cb.and(predicates.toArray(new Predicate[predicates.size()]))));

        return entityManager.createQuery(query)
                .getResultList();


    }
}
