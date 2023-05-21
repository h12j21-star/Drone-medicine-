package com.example.userinfo;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
@Entity
@Getter
@Setter
public class UserInfo {



    @Id
    @Column
    private String id;
    private String pw;

}
