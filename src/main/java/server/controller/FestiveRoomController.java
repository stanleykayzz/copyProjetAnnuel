package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.FestiveRoom;
import server.repository.FestiveRoomRepository;
import server.service.ClientService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping("/api/festiveRoom")
public class FestiveRoomController {

    @Autowired
    private FestiveRoomRepository festiveRoomRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<FestiveRoom> getListFestiveRooms(@RequestParam("id") int id, @RequestParam("token") String token){

        if(clientService.findByToken(token) != null){
            return festiveRoomRepository.findAll();
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addFestiveRoom(@RequestBody FestiveRoom festiveRoom, @RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            festiveRoomRepository.save(festiveRoom);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateFestiveRoom(@RequestBody FestiveRoom festiveRoom,  @RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            festiveRoomRepository.save(festiveRoom);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteFestiveRoomById(@RequestParam("id") Long id,  @RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            festiveRoomRepository.delete(id);
        }
    }
}