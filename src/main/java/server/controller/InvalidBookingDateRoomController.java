package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.InvalidBookingDateRoom;
import server.repository.InvalidBookingDateRoomRepository;
import server.service.ClientService;
import server.service.InvalidBookingDateRoomService;

import java.util.Date;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/invalidBookingDateRoom")
public class InvalidBookingDateRoomController {

    @Autowired
    private InvalidBookingDateRoomRepository invalidBookingDateRoomRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<InvalidBookingDateRoom> getListInvalidBookingDateRoomByMinDate(@RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            return invalidBookingDateRoomRepository.getListInvalidBookingDateRoomByMinDate(new Date());
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.FOUND)
    public void addInvalidBookingDateFestiveRoom(@RequestBody InvalidBookingDateRoom invalidBookingDateRoom, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            invalidBookingDateRoomRepository.save(invalidBookingDateRoom);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.FOUND)
    public void updateInvalidBookingDateFestiveRoom(@RequestBody InvalidBookingDateRoom invalidBookingDateRoom, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            invalidBookingDateRoomRepository.save(invalidBookingDateRoom);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteInvalidBookingDateFestiveRoom(@RequestBody InvalidBookingDateRoom invalidBookingDateRoom, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            invalidBookingDateRoomRepository.delete(invalidBookingDateRoom);
        }
    }
}
