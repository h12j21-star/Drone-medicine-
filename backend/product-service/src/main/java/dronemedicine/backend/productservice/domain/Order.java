package dronemedicine.backend.productservice.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("JpaDataSourceORMInspection")
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Table(name = "Lucky_order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,unique = true)
    private Long id;

    @Column(nullable = false, name = "order number")
    private Integer OrderNum;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Long count;

    @Column(nullable = false, name = "total price")
    private Long price;

}
