package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import static org.springframework.web.bind.annotation.RequestMethod.*;

import org.springframework.web.bind.annotation.*;
import server.model.RoomService;
import server.repository.RoomServiceRepository;
import server.service.ClientService;

import java.util.List;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/roomService")
public class RoomServiceController {

    @Autowired
    private RoomServiceRepository roomServiceRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<RoomService> getListRoomService(@RequestParam("token") String token){

        if(clientService.findByToken(token) != null){
            roomServiceRepository.findAll();
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addRoomService(@RequestBody RoomService roomService, @RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            roomServiceRepository.save(roomService);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateRoomService(@RequestBody RoomService roomService, @RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            roomServiceRepository.save(roomService);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteRoomService(@RequestParam("id") Long id, @RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            roomServiceRepository.delete(id);
        }
    }
}
