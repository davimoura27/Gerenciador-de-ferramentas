package asset.manager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import asset.manager.Entity.Equipment;

public interface EquipmentRepository extends JpaRepository<Equipment,Long> {
    boolean existsByAssetCode(String id);
}
