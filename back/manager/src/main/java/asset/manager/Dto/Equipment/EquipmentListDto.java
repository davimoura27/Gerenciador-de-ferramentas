package asset.manager.Dto.Equipment;

import asset.manager.Enum.EquipmentStatus;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EquipmentListDto {
    private Long id;
    private String assetCode;
    private String name;
    private String model;
    private String brand;
    private String category;
    private EquipmentStatus status;
    private String description;
}
