package com.example.pharmacylist;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.sql.Blob;

@Entity
@Getter
@Setter
public class PharmacyList {
    @Id @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String open;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String img;

    @Column(nullable = false)
    private String latitude;

    @Column(nullable = false)
    private String longitude;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private Long deliveryFee;


//    {
//        id: 1,
//            name: "태평 종로약국",
//            img: jong,
//            open: "09:00 - 21:00",
//            address: "경기 성남시 수정구 탄리로 120 오거리빌딩",
//            latitude: "37.4463796",
//            longitude: "127.134314",
//            call: "031-755-5518",
//    },
//    {
//        id: 2,
//                name: "청년약국",
//            img: chung,
//            open: "10:00 - 21:00",
//            address: "경기 성남시 수정구 성남대로 1330 일성오퍼스원 1층 청년약국",
//            latitude: "37.4483877",
//            longitude: "127.127119",
//            call: "031-8039-7582",
//    },
//    {
//        id: 3,
//                name: "동서울약국",
//            img: dong,
//            open: "09:00 - 21:00",
//            address: "경기 성남시 수정구 복정로 86 104호",
//            latitude: "37.4605966",
//            longitude: "127.126947",
//            call: "0507-1327-5398",
//    },
}
