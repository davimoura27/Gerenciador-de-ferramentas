package asset.manager.Dto.Brand;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BrandRequestDto{
    @NotBlank
    private String name;
}
