package asset.manager.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import asset.manager.Entity.Brand;

public interface BrandRepository extends JpaRepository<Brand,Long>{
    boolean existsByNameIgnoreCase(String name);
    boolean existsByNameIgnoreCaseAndIdNot(String name, Long id);
    List<Brand> findByNameContainingIgnoreCase(String name);
}
