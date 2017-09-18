package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.FestiveRoomService;
import server.repository.FestiveRoomServiceRepository;
import server.service.ClientService;
import server.service.FestiveRoomServiceService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/festiveRoomService")
public class FestiveRoomServiceController {

    @Autowired
    private FestiveRoomServiceRepository festiveRoomServiceRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<FestiveRoomService> getListFestiveRoomServices(@RequestParam("token") String token){
        if(clientService.findByToken(token) != null){
            return festiveRoomServiceRepository.findAll();
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.FOUND)
    public void addFestiveRoomService(@RequestBody FestiveRoomService festiveRoomService, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            festiveRoomServiceRepository.save(festiveRoomService);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.FOUND)
    public void updateFestiveRoomService(@RequestBody FestiveRoomService festiveRoomService, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            festiveRoomServiceRepository.save(festiveRoomService);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.FOUND)
    public void deleteFestiveRoomServiceById(@RequestParam("id") Long id, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            festiveRoomServiceRepository.delete(id);
        }
    }
}
