package asset.manager.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import asset.manager.Dto.Category.CategoryRequestDto;
import asset.manager.Entity.Category;
import asset.manager.Repository.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    private static final Logger logger = LoggerFactory.getLogger(CategoryService.class);

    public List<Category> findAll(){
        return categoryRepository.findAll();
    }

    public Category findById(Long id){
        return  categoryRepository.findById(id).orElseThrow(() -> 
            new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada"));
    }

    public  List<Category> findByName(String name){
        List<Category> categories = categoryRepository.findByNameContainingIgnoreCase(name);

        if(categories.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nenhuma categoria encontrada pelo nome");

        return  categories;
    }

    public Category createCategory(CategoryRequestDto category){
        
        if(categoryRepository.existsByNameIgnoreCase(category.getName()))
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Categoria ja registrada!");

        Category newCategory = modelMapper.map(category, Category.class);

        Category categorySave = categoryRepository.save(newCategory);

        logger.info("Categoria criada com sucesso. ID: {}, nome: {}",
                categorySave.getId(), categorySave.getName());

        return newCategory;
    }

    public Category updateCategory(Long id, CategoryRequestDto newCategory){
        if(categoryRepository.existsByNameIgnoreCaseAndIdNot(newCategory.getName(), id))
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Categoria ja registrada");

        Category category = categoryRepository.findById(id).orElseThrow(() -> 
            new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada"));

        category.setName(newCategory.getName());
        category.setUpdatedAt(LocalDateTime.now());

        Category saveCategory = categoryRepository.save(category);

        logger.info("Categoria atualizada com sucesso. ID: {}, nome: {}",
            saveCategory.getId(), saveCategory.getName());

        return  saveCategory;
    }

    public void  deleteCategory(Long id){
        Category category = categoryRepository.findById(id).orElseThrow(() ->
            new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada"));
        
        categoryRepository.delete(category);

        logger.info("Categoria deletada com sucesso. ID: {}, nome: {}",
            category.getId(), category.getName());
    }
}
