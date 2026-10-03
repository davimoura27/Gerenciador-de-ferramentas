package asset.manager.Controller;

import java.util.List;

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

import asset.manager.Dto.Brand.BrandRequestDto;
import asset.manager.Entity.Brand;
import asset.manager.Service.BrandService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/brands")
public class BrandController {
    @Autowired
    private BrandService brandService;

    @GetMapping
    public ResponseEntity<?> findAll(@RequestParam(required = false) String name){
        if (name != null) 
            return ResponseEntity.ok().body(brandService.findByName(name));

        return ResponseEntity.ok().body(brandService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Brand> findById(@PathVariable Long id){
        return ResponseEntity.ok().body(brandService.findById(id));
    }

    @PostMapping()
    public ResponseEntity<Brand> createBrand(@Valid @RequestBody BrandRequestDto brand){
        return ResponseEntity.status(HttpStatus.CREATED).body(brandService.createBrand(brand));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Brand> updateBrand(@PathVariable Long id, @Valid @RequestBody BrandRequestDto brand){
        return ResponseEntity.ok().body(brandService.updateBrand(id, brand));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBrand(@PathVariable Long id){
        brandService.deleteBrand(id);
        return ResponseEntity.noContent().build();
    }
}
