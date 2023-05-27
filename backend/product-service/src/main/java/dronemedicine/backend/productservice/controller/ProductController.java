package dronemedicine.backend.productservice.controller;

import dronemedicine.backend.productservice.domain.Order;
import dronemedicine.backend.productservice.domain.Product;
import dronemedicine.backend.productservice.domain.ProductPostData;
import dronemedicine.backend.productservice.repository.OrderRepository;
import dronemedicine.backend.productservice.repository.ProductRepository;
import jakarta.ws.rs.NotFoundException;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    public ProductController(ProductRepository productRepository, OrderRepository orderRepository){
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    @PostMapping("/api/products")
    public String addProduct(@RequestBody Product inputProduct){
        //유효성 검사 후, DB에 추가
        System.out.println("post body:" + inputProduct);
        Optional<Product> target = productRepository.findProductByNameAndPharmacyName(inputProduct.getName(),inputProduct.getPharmacyName());
        if(target.isPresent()){
            System.out.println("이미 해당 약국에 동일한 제품이 있다.");
            return "Fail";
        }
        Product product = new Product();
        product.setName(inputProduct.getName());
        product.setPharmacyName(inputProduct.getPharmacyName());
        product.setImgFileName(inputProduct.getImgFileName());
        product.setQuantity(inputProduct.getQuantity());
        product.setPrice(inputProduct.getPrice());
        System.out.println("데이터베이스에 추가할 상품: " +product);
        productRepository.save(product);
        return "Success";
    }



    @GetMapping("/api/products/{pharmacyName}")
    @ResponseBody
    public List<Product> getProductsByPharmacyName(@PathVariable("pharmacyName") String pharmacyName){
        System.out.println(pharmacyName + "의 제품들 리턴");
        System.out.println(productRepository.findAllByPharmacyName(pharmacyName));
        return productRepository.findAllByPharmacyName(pharmacyName);
    }

    @GetMapping("/api/products/images/{imageName}")
    public ResponseEntity<Resource> getProductImageByName(@PathVariable("imageName") String imageName){
        try {
            //DB의 이미지 파일명을 저장, 서버의 특정 폴더 안에 있는 이미지파일 프론트에 전송
//            String path="C:\\springExercise\\finalProject\\Drone-medicine-\\backend\\product-service\\image\\";
            String path="/Users/kimjuha/Desktop/AdvancedWeb/BioDrone/Drone-medicine-/backend/product-service/image//";
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

    @PutMapping("/api/products/order")
    public String change(@RequestBody ProductPostData request){
        System.out.println("body" + request );
        for(int id = 0 ; id<request.getIds().length;id++){
            Optional<Product>productUpdate=productRepository.findById(request.getIds()[id]);
            Product _product = productUpdate.get();
            _product.setQuantity(_product.getQuantity()-request.getChangeProduct()[id]);
            System.out.println(" product: " +_product);
            productRepository.save(_product);
        }

        // put order database
        int orderNum = ((int)((Math.random() * 100)));
        for(int id = 0; id < request.getIds().length; id++){
            Optional<Product>productUpdate = productRepository.findById(request.getIds()[id]);
            Product _product = productUpdate.get();
            Order order = new Order();
            order.setOrderNum(orderNum);
            order.setName(_product.getName());
            order.setPrice(_product.getPrice() * request.getChangeProduct()[id]);
            order.setCount(request.getChangeProduct()[id]);
            orderRepository.save(order);
        }
        return "Success";
    }

}
