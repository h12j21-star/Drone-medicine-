package com.example.pharmacylist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PharmacyListRepository extends JpaRepository<PharmacyList, Long> {
}
