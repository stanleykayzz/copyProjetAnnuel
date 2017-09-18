package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.Client;
import server.model.FestiveRoom;
import server.model.RoomBookingServices;
import server.repository.RoomBookingServicesRepository;
import server.service.ClientService;
import server.service.RoomBookingServicesService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/roomBookingServices")
public class RoomBookingServicesController {

    @Autowired
    private RoomBookingServicesRepository roomBookingServicesRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<RoomBookingServices> getListRoomBookingServices(@RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            return roomBookingServicesRepository.findAll();
        }

        return null;
    }

    @RequestMapping(path = "/findByIdRoomBooking", method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<RoomBookingServices> getListRoomBookingServicesByIdRoomBooking(@RequestParam("idRoomBooking") Long idRoomBooking, @RequestParam("token") String token){

        if(clientService.findByToken(token) != null){
            return roomBookingServicesRepository.getListByIdRoomBooking(idRoomBooking);
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addRoomBookingServices(@RequestBody RoomBookingServices roomBookingServices, @RequestParam("token") String token){

        if(clientService.findByToken(token) != null){
            roomBookingServicesRepository.save(roomBookingServices);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateRoomBookingServices(@RequestBody RoomBookingServices roomBookingServices, @RequestParam("token") String token){

        if(clientService.findByToken(token) != null){
            roomBookingServicesRepository.save(roomBookingServices);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteRoomBookingServices(@RequestParam("id") Long id, @RequestParam("token") String token){

        if(clientService.findByToken(token) != null){
            roomBookingServicesRepository.delete(id);
        }
    }
}
