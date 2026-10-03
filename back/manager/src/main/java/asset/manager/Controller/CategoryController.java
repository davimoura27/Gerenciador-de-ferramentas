package asset.manager.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import asset.manager.Dto.Category.CategoryRequestDto;
import asset.manager.Entity.Category;
import asset.manager.Service.CategoryService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<?> findAll(@RequestParam(required = false) String name){
        if(name != null)
            return ResponseEntity.ok().body(categoryService.findByName(name));

        return ResponseEntity.ok().body(categoryService.findAll());
    }
    @GetMapping("/{id}")
    public  ResponseEntity<Category> findById(@PathVariable Long id){
        return  ResponseEntity.ok().body(categoryService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Category> createCategory(@Valid @RequestBody CategoryRequestDto category){
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.createCategory(category));
    }

    @PutMapping("/{id}")
    public  ResponseEntity<Category> updateCategory(@PathVariable  Long id, @Valid @RequestBody CategoryRequestDto newCategory){
        return ResponseEntity.ok().body(categoryService.updateCategory(id, newCategory));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable  Long id){
        categoryService.deleteCategory(id);
        return  ResponseEntity.noContent().build();
    }
}
//Ler ultima conversa com o chat e dar continuidade, mas antes, criar um repositorio e fazer deploy