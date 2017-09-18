package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.InvalidBookingDateFestiveRoom;
import server.repository.InvalidBookingDateFestiveRoomRepository;
import server.service.ClientService;
import server.service.InvalidBookingDateFestiveRoomService;

import java.util.Date;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/invalidBookingDateFestiveRoom")
public class InvalidBookingDateFestiveRoomController {

    @Autowired
    private InvalidBookingDateFestiveRoomRepository invalidBookingDateFestiveRoomRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<InvalidBookingDateFestiveRoom> getListInvalidBookingDateFestiveRoomByMinDate(@RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            return invalidBookingDateFestiveRoomRepository.getListInvalidBookingDateFestiveRoomByMinDate(new Date());
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.FOUND)
    public void addInvalidBookingDateFestiveRoom(@RequestBody InvalidBookingDateFestiveRoom invalidBookingDateFestiveRoom, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            invalidBookingDateFestiveRoomRepository.save(invalidBookingDateFestiveRoom);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.FOUND)
    public void updateInvalidBookingDateFestiveRoom(@RequestBody InvalidBookingDateFestiveRoom invalidBookingDateFestiveRoom, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            invalidBookingDateFestiveRoomRepository.save(invalidBookingDateFestiveRoom);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.FOUND)
    public void deleteInvalidBookingDateFestiveRoom(@RequestBody InvalidBookingDateFestiveRoom invalidBookingDateFestiveRoom, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            invalidBookingDateFestiveRoomRepository.delete(invalidBookingDateFestiveRoom);
        }
    }
}
