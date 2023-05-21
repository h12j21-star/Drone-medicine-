package dronemedicine.backend.productservice.domain;

import lombok.Data;

@Data
public class ProductPostData {
    private Long[] ids;
    private Long[] changeProduct;
}
