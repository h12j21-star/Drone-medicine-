package dronemedicine.backend.productservice.repository;

import dronemedicine.backend.productservice.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface OrderRepository extends JpaRepository<Order, Long> {
//    List<Product> findAllByPharmacyName(String pharmacyName);
//    Optional<Product> findProductByNameAndPharmacyName(String name, String pharmacyName);
}
