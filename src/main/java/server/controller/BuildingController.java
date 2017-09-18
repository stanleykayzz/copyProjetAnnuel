package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import server.model.Building;
import server.repository.BuildingRepository;
import server.service.BuildingService;
import server.service.ClientService;
import server.service.RoomService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/building")
public class BuildingController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private BuildingRepository buildingRepository;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<Building> getListBuildings(@RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            return buildingRepository.findAll();
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addBuilding(@RequestBody Building building, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            buildingRepository.save(building);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.OK)
    public void updateBuilding(@RequestBody Building building, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            buildingRepository.save(building);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteBuilding(@RequestParam("id") Long id, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            buildingRepository.delete(id);
        }
    }
}
