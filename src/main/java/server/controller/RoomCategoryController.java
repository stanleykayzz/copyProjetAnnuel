package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.RoomCategory;
import server.repository.RoomCategoryRepository;
import server.service.ClientService;
import server.service.RoomCategoryService;
import server.service.RoomService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/roomCategory")
public class RoomCategoryController {

    @Autowired
    private RoomCategoryRepository roomCategoryRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(path = "getListRoomCategories", method = GET)
    @ResponseStatus(value = HttpStatus.FOUND)
    public List<RoomCategory> getListRoomCategories() {
        return roomCategoryRepository.findAll();
    }

    @RequestMapping(method = POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public void addRoomCategory(@RequestBody RoomCategory roomCategory, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            roomCategoryRepository.save(roomCategory);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(value = HttpStatus.CREATED)
    public void updateRoomCategory(@RequestBody RoomCategory roomCategory, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            roomCategoryRepository.save(roomCategory);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteRoomCategory(@RequestParam(value = "id") Long id, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            roomCategoryRepository.delete(id);
        }
    }
}
