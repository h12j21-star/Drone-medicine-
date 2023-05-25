package com.example.pharmacylist;

import jakarta.ws.rs.NotFoundException;
import org.apache.tomcat.jni.FileInfo;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3000")
@RestController
public class PharmacyListController {
    
    private final PharmacyListRepository pharmacyListRepository;
    
    public PharmacyListController(PharmacyListRepository userRepository){
        this.pharmacyListRepository = userRepository;
    }
    
    @GetMapping("/api/pharmacy")
    public List<PharmacyList> getPharmacyList() {
        
        return pharmacyListRepository.findAll();
    }

    @PostMapping("/api/pharmacy")
    public String addPharmacy(@RequestBody PharmacyList inputPharmacy){
        Optional<PharmacyList> target =pharmacyListRepository.findByNameAndAddress(inputPharmacy.getName(),inputPharmacy.getAddress());
        if(target.isPresent()){
            System.out.println("이미 해당 약국이 존재합니다");
            return "Fail";
        }
        PharmacyList newPharmacy = new PharmacyList();
        newPharmacy.setName(inputPharmacy.getName());
        newPharmacy.setAddress(inputPharmacy.getAddress());
        newPharmacy.setPhone(inputPharmacy.getPhone());
        newPharmacy.setImg(inputPharmacy.getImg());
        newPharmacy.setOpen(inputPharmacy.getOpen());
        newPharmacy.setLatitude(inputPharmacy.getLatitude());
        newPharmacy.setLongitude(inputPharmacy.getLongitude());
        newPharmacy.setDeliveryFee(inputPharmacy.getDeliveryFee());
        pharmacyListRepository.save(newPharmacy);
        return "Success";
    }

    @GetMapping("/api/pharmacy/images/{imageName}")
    public ResponseEntity<Resource> getProductImageByName(@PathVariable("imageName") String imageName){
        try {
            //DB의 이미지 파일명을 저장, 서버의 특정 폴더 안에 있는 이미지파일 프론트에 전송
//            String path="C:\\springExercise\\finalProject\\Drone-medicine-\\backend\\pharmacyList\\image\\";
            String path="/Users/kimjuha/Desktop/AdvancedWeb/BioDrone/Drone-medicine-/backend/PharmacyList/image//";
            FileSystemResource resource = new FileSystemResource(path + imageName);
            if(!resource.exists()){
                throw new NotFoundException();
            }
            HttpHeaders header = new HttpHeaders();
            Path filePath = null;
            filePath = Paths.get(path+imageName);
            header.add("Content-Type", Files.probeContentType(filePath));
            return new ResponseEntity<Resource>(resource, header, HttpStatus.OK);
        } catch (Exception e){
            throw new NotFoundException();
        }
    }


}
