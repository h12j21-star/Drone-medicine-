package com.example.userinfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3000")
@RestController
public class UserInfoController {
    @Autowired
    private final UserInfoRepository userInfoRepository;
    public UserInfoController(UserInfoRepository userInfoRepository){
        this.userInfoRepository = userInfoRepository;
    }
    @GetMapping("/api/userinfo")
    public List<UserInfo> getUserinfo() {
        return userInfoRepository.findAll();
    }

    @GetMapping("/api/userinfo/{id}")
    @ResponseBody
    public UserInfo CheckUserId(@PathVariable String id){
        Optional<UserInfo> account = userInfoRepository.findById(id);
        if(account.isPresent()) {
            return account.get();
        } else {
            return null;
        }
    }

    @PostMapping("/api/userinfo")
    public String create( @RequestBody UserInfo userinfo) {

        userInfoRepository.save(userinfo);
        return "user create ok";
    }
}

