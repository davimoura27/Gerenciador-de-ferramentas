package asset.manager.Dto.Equipment;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import asset.manager.Enum.EquipmentStatus;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EquipmentDetailsDto {
    private Long id;
    private String assetCode;
    private String name;
    private String serialNumber;
    private String model;
    private String brand;
    private String category;
    private EquipmentStatus status;
    private String description;
    private LocalDate purchaseDate;
    private BigDecimal purchaseValue;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
