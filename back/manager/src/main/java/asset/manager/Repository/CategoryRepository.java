package asset.manager.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import asset.manager.Entity.Category;

public interface CategoryRepository extends JpaRepository<Category,Long>{
    boolean existsByNameIgnoreCase(String name);
    boolean existsByNameIgnoreCaseAndIdNot(String name, Long id);
    List<Category>findByNameContainingIgnoreCase(String name);
}
