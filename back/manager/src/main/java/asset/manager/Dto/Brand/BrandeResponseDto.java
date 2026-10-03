package asset.manager.Dto.Brand;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class BrandeResponseDto {
    private Long id;
    private String name;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
