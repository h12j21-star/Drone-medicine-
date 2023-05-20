package com.example.userinfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3001")
@RestController
public class UserInfoController {
    @Autowired
    private final UserInfoRepository userInfoRepository;
    public UserInfoController(UserInfoRepository userInfoRepository){
        this.userInfoRepository = userInfoRepository;
    }
    @GetMapping("/userinfo")
    public List<UserInfo> getPharmacyList() {
        return userInfoRepository.findAll();
    }
    @GetMapping("/userinfo/{id}")
    public Optional<UserInfo> getMemberId(@PathVariable("id") Long id ){
        return  userInfoRepository.findById(id);
    }


    @PostMapping("/userinfo")
    public String create(@RequestBody UserInfo userInfo) {
        userInfoRepository.save(userInfo);
        return "member create ok";
    }
}

