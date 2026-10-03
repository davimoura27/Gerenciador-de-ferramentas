package asset.manager.Dto.Equipment;

import java.math.BigDecimal;
import java.time.LocalDate;
import asset.manager.Enum.EquipmentStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
public class EquipmentRequestDto {

    @NotBlank
    private String name;

    @NotBlank
    private String serialNumber;

    @NotNull
    private String model;

    @NotNull
    private Long categoryId;

    @NotNull
    private Long brandId;
    
    @NotNull
    private EquipmentStatus status;

    private String description;

    private LocalDate purchaseDate;

    @PositiveOrZero
    private BigDecimal purchaseValue;
}