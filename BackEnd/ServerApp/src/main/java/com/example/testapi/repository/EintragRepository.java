package com.example.testapi.repository;

import com.example.testapi.model.Eintrag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

// Standard Repository-Queries / Custom-Queries
public interface EintragRepository extends JpaRepository<Eintrag, Long> , EintragRepositoryCustom{


    @Query(value = "SELECT DISTINCT e.* FROM Eintrag e INNER JOIN eint_krit ek ON ek.e_id=e.id INNER JOIN Kriterien k on k.id=ek.krit_id WHERE k.krit_name='vegan' or k.krit_name='bio' ", nativeQuery = true)
    List<Eintrag> findByKriterien();
    @Query(value = "SELECT DISTINCT e.* FROM Eintrag e INNER JOIN eint_krit ek ON ek.e_id=e.id INNER JOIN Kriterien k on k.id=ek.krit_id WHERE k.krit_name=?1", nativeQuery = true)
    List<Eintrag> findByKrit(String krit);
    @Query(value = "SELECT DISTINCT e.* FROM Eintrag e INNER JOIN eint_krit ek ON ek.e_id=e.id INNER JOIN Kriterien k on k.id=ek.krit_id WHERE k.krit_name in ?1", nativeQuery = true)
    List<Eintrag> findByKrits(List<String> krits);
    @Query(value = "SELECT * FROM Eintrag e", nativeQuery = true)
    List<Eintrag> findAllEintraege();
    List<Eintrag> findByKategorie(String kategorie);
    List<Eintrag> findByIdIn(List<Long> ids);
    List<Eintrag> findByKategorieIn(List<String> kategorien);




    //List<Eintrag> findAllbyKriterien(List<String> kategorien);

}
