package com.example.pharmacylist;

import org.apache.tomcat.jni.FileInfo;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.MalformedURLException;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class PharmacyListController {
    
    private final PharmacyListRepository pharmacyListRepository;
    
    public PharmacyListController(PharmacyListRepository userRepository){
        this.pharmacyListRepository = userRepository;
    }
    
    @GetMapping("/pharmacylist")
    public List<PharmacyList> getPharmacyList() {
        
        return pharmacyListRepository.findAll();
    }
}
