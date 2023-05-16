package com.example.pharmacylist;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;

import java.sql.Blob;

@Entity
@Getter
public class PharmacyList {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private String open;
    private String address;
    private String img;
    private String latitude;
    private String longitude;
    private String phone;
    
    
//    id: 1,
//    name: "태평 종로약국",
//    img: jong,
//    open: "09:00 - 21:00",
//    address: "경기 성남시 수정구 탄리로 120 오거리빌딩",
//    latitude: "37.4463796",
//    longitude: "127.134314",
//    call: "031-755-5518",
}
