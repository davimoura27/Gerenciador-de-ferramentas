package asset.manager.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
@Table(name = "brand")
public class Brand extends BaseEntity{

    @Column
    @NotBlank
    private String name;

}
