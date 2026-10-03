package asset.manager.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import asset.manager.Dto.Equipment.EquipmentDetailsDto;
import asset.manager.Dto.Equipment.EquipmentListDto;
import asset.manager.Dto.Equipment.EquipmentRequestDto;
import asset.manager.Entity.Brand;
import asset.manager.Entity.Category;
import asset.manager.Entity.Equipment;
import asset.manager.Repository.BrandRepository;
import asset.manager.Repository.CategoryRepository;
import asset.manager.Repository.EquipmentRepository;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EquipmentService {
    @Autowired
    private EquipmentRepository equipmentRepository;

    @Autowired
    private BrandRepository brandRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    private static final Logger logger = LoggerFactory.getLogger(EquipmentService.class);
    
    public List<EquipmentListDto> findAll(){
        return equipmentRepository.findAll().stream().map(equipment -> new EquipmentListDto(
                equipment.getId(),
                equipment.getAssetCode(),
                equipment.getName(),
                equipment.getModel(),
                equipment.getBrand().getName(),
                equipment.getCategory().getName(),
                equipment.getStatus(),
                equipment.getDescription()
        )).toList();
    }
    
    public EquipmentDetailsDto findById(Long id){
        Equipment equipment = equipmentRepository.findById(id).orElseThrow(() -> 
            new ResponseStatusException(HttpStatus.NOT_FOUND,"Equipamento não encontrado"));

        return new EquipmentDetailsDto(
                equipment.getId(),
                equipment.getAssetCode(),
                equipment.getName(),
                equipment.getSerialNumber(),
                equipment.getModel(),
                equipment.getBrand().getName(),
                equipment.getCategory().getName(),
                equipment.getStatus(),
                equipment.getDescription(),
                equipment.getPurchaseDate(),
                equipment.getPurchaseValue(),
                equipment.getCreatedAt(),
                equipment.getUpdatedAt()
        );
    }
   
    @Transactional
    public Equipment createEquipment (EquipmentRequestDto equipment){

        Category category = categoryRepository.findById(equipment.getCategoryId()).orElseThrow(() -> 
            new ResponseStatusException(HttpStatus.NOT_FOUND,"Categoria não registrada"));

        Brand brand = brandRepository.findById(equipment.getBrandId()).orElseThrow(() -> 
            new ResponseStatusException(HttpStatus.NOT_FOUND,"Marca não registrada"));

        Equipment newEquipment = new Equipment();

        long numero = 1;
        while (equipmentRepository.existsByAssetCode(String.format("EQP-%06d", numero))) 
            numero++;

        newEquipment.setAssetCode(String.format("EQP-%06d", numero));
        newEquipment.setName(equipment.getName());
        newEquipment.setSerialNumber(equipment.getSerialNumber());
        newEquipment.setModel(equipment.getModel());
        newEquipment.setDescription(equipment.getDescription());
        newEquipment.setPurchaseDate(equipment.getPurchaseDate());
        newEquipment.setPurchaseValue(equipment.getPurchaseValue());
        newEquipment.setStatus(equipment.getStatus());
        newEquipment.setCategory(category);
        newEquipment.setBrand(brand);        
        
        Equipment savedEquipment = equipmentRepository.save(newEquipment);

        logger.info("Equipamento criado com sucesso. ID: {}, assetCode: {}",
        newEquipment.getId(), newEquipment.getAssetCode());

        return savedEquipment;
    }

    public EquipmentDetailsDto updateEquipment(Long id, EquipmentRequestDto newEquipment){
        Equipment equipment = equipmentRepository.findById(id).orElseThrow(() -> 
            new ResponseStatusException(HttpStatus.NOT_FOUND, "Equipamento não encontrado"));

        Category category = categoryRepository.findById(newEquipment.getCategoryId()).orElseThrow(() -> 
            new ResponseStatusException(HttpStatus.NOT_FOUND,"Categoria não encontrada"));

        Brand brand = brandRepository.findById(newEquipment.getBrandId()).orElseThrow(() ->
            new ResponseStatusException(HttpStatus.NOT_FOUND, "Marca não cencontrada"));

        equipment.setName(newEquipment.getName());
        equipment.setDescription(newEquipment.getDescription());
        equipment.setModel(newEquipment.getModel());
        equipment.setSerialNumber(newEquipment.getSerialNumber());
        equipment.setStatus(newEquipment.getStatus());
        equipment.setBrand(brand);
        equipment.setCategory(category);
        equipment.setPurchaseValue(newEquipment.getPurchaseValue());
        equipment.setPurchaseDate(newEquipment.getPurchaseDate());
        equipment.setUpdatedAt(LocalDateTime.now());

        Equipment updateEquipment = equipmentRepository.save(equipment);

        logger.info("Equipamento atualizado com sucesso. ID: {}, assetCode: {}",
        updateEquipment.getId(),
        updateEquipment.getAssetCode());

        return new EquipmentDetailsDto(
            updateEquipment.getId(),
            updateEquipment.getAssetCode(),
            updateEquipment.getName(),
            updateEquipment.getSerialNumber(),
            updateEquipment.getModel(),
            updateEquipment.getBrand().getName(),
            updateEquipment.getCategory().getName(),
            updateEquipment.getStatus(),
            updateEquipment.getDescription(),
            updateEquipment.getPurchaseDate(),
            updateEquipment.getPurchaseValue(),
            updateEquipment.getCreatedAt(),
            updateEquipment.getUpdatedAt()
        );
    }
    public void deleteEquipment(Long id){
        Equipment equipment = equipmentRepository.findById(id).orElseThrow(() -> 
            new ResponseStatusException(HttpStatus.NOT_FOUND,"Equipamento não encontrado!"));

        equipmentRepository.delete(equipment);  
        
        logger.info("Equipamento deletado com sucesso. ID: {}, assetCode:{}",
        equipment.getId(), equipment.getAssetCode());
    }
}
