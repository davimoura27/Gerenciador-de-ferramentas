package asset.manager.Entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import asset.manager.Enum.EquipmentStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "equipment")
public class Equipment extends BaseEntity {

    @Column
    private String assetCode;

    @Column
    @NotBlank
    private String name;

    @Column
    private String serialNumber;

    @Column
    @NotBlank
    private String model;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @Column
    private String description;

    @Enumerated(EnumType.STRING)
    private EquipmentStatus status;

    @Column
    private LocalDate purchaseDate;

    @Column
    private BigDecimal purchaseValue;
}