package asset.manager.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import asset.manager.Dto.Brand.BrandRequestDto;
import asset.manager.Entity.Brand;
import asset.manager.Repository.BrandRepository;

@Service
public class BrandService {
    @Autowired
    private BrandRepository brandRepository;

    @Autowired
    private ModelMapper modelMapper;

    private static final Logger logger = LoggerFactory.getLogger(BrandService.class);

    public List<Brand> findAll(){
        return brandRepository.findAll();
    }

    public Brand findById(Long id){
        return brandRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Marca não encontrada"));
    }

    public List<Brand> findByName(String name){
        List<Brand> brands = brandRepository.findByNameContainingIgnoreCase(name);

        if (brands.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nenhuma marca encontrada pelo nome");

        return brands;        
    }

    public Brand createBrand(BrandRequestDto brand){
        
        if (brandRepository.existsByNameIgnoreCase(brand.getName())) 
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Marca ja registrada!");

        Brand newBrand = modelMapper.map(brand, Brand.class); 

        brandRepository.save(newBrand);

        logger.info("Marca criada com sucesso. ID: {}, nome:{}",
        newBrand.getId(), newBrand.getName());
        
        return newBrand;
    }

    public Brand updateBrand(Long id, BrandRequestDto newBrand){
        if(brandRepository.existsByNameIgnoreCaseAndIdNot(newBrand.getName(), id))
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Marca ja registrada");

        Brand brand = brandRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Marca não encontrada"));
        
        brand.setName(newBrand.getName());
        brand.setUpdatedAt(LocalDateTime.now());

        Brand saveBrand = brandRepository.save(brand);

        logger.info("Marca atualizada com sucesso. ID: {}, nome: {}",
            saveBrand.getId(), saveBrand.getName());

        return saveBrand;        
    }

    public void deleteBrand(Long id){
        Brand brand = brandRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Marca não encontrada"));

        brandRepository.delete(brand);

        logger.info("Marca deletada com sucesso. ID: {}, nome: {}",
        brand.getId(), brand.getName());
    }
}

