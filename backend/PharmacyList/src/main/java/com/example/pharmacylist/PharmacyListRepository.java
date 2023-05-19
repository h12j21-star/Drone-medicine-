package com.example.pharmacylist;

import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PharmacyListRepository extends JpaRepository<PharmacyList, Long> {

    Optional<PharmacyList> findByNameAndAddress(String name, String address);
}
