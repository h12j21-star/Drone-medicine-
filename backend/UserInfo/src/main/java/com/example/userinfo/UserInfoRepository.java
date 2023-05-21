package com.example.userinfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "userinfo", path="userinfo")

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo,Long> {
   public Optional<UserInfo> findById(String id);

}