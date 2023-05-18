package dronemedicine.backend.productservice.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("JpaDataSourceORMInspection")
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,unique = true)
    private Long id;

    @Column(nullable = false)
    private String pharmacyName;
    //태평종로약국, 청년약국, 동서울약국

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String imgFileName;

    @Column(nullable = false)
    private Long quantity;

    @Column(nullable = false)
    private Long price;




//    id: 1,
//    name: '얼라이브 멀티비타민',
//    src: 'assets/multi-vitamin.jpg', =>파일 명만
//    amount: 1,    =>프론트단에서 처리
//    max: 10,
//    deliveryFee: 3000, => 약국 디비에 각 약국이 측정한 배달료
//    checked: false, => 프론트단에서 처리
//    price: 25900,


}
