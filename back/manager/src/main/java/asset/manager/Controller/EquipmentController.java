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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import asset.manager.Dto.Equipment.EquipmentDetailsDto;
import asset.manager.Dto.Equipment.EquipmentListDto;
import asset.manager.Dto.Equipment.EquipmentRequestDto;
import asset.manager.Entity.Equipment;
import asset.manager.Service.EquipmentService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/equipments")
public class EquipmentController {
    @Autowired
    private EquipmentService equipmentService;

    @GetMapping
    public ResponseEntity<List<EquipmentListDto>> listEquipments(){
        return ResponseEntity.ok().body(equipmentService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EquipmentDetailsDto> findById(@PathVariable Long id) {
        return ResponseEntity.ok().body(equipmentService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Equipment> createEquipment(@Valid @RequestBody EquipmentRequestDto equipment){
        return ResponseEntity.status(HttpStatus.CREATED).body(equipmentService.createEquipment(equipment));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EquipmentDetailsDto> updateEquipment(@PathVariable Long id, @Valid @RequestBody EquipmentRequestDto equipment){
        return ResponseEntity.ok().body(equipmentService.updateEquipment(id, equipment));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEquipment(@PathVariable Long id){
        equipmentService.deleteEquipment(id);
        return ResponseEntity.noContent().build();
    }
}
