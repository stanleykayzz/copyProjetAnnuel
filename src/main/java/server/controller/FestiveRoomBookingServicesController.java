package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.FestiveRoomBookingServices;
import server.repository.FestiveRoomBookingServicesRepository;
import server.service.ClientService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/festiveRoomBookingServices")
public class FestiveRoomBookingServicesController {

    @Autowired
    private FestiveRoomBookingServicesRepository festiveRoomBookingServicesRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<FestiveRoomBookingServices> listFestiveRoomBookingServices(@RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            return festiveRoomBookingServicesRepository.findAll();
        }

        return null;
    }

    @RequestMapping(path = "/getById", method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<FestiveRoomBookingServices> getFestiveRoomBookingServicesByIdFestiveRoomBooking(@RequestParam("id") Long id, @RequestParam("token") String token) {

        if (clientService.findByToken(token) != null) {
            return festiveRoomBookingServicesRepository.getFestiveRoomBookingServicesByIdFestiveRoomBooking(id);
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addFestiveRoomBookingServices(@RequestBody List<FestiveRoomBookingServices> listFestiveRoomBookingServices, @RequestParam("token") String token) {
        if (clientService.findByToken(token) != null) {
            for(FestiveRoomBookingServices f : listFestiveRoomBookingServices){
                festiveRoomBookingServicesRepository.save(f);
            }
        }
    }
}
