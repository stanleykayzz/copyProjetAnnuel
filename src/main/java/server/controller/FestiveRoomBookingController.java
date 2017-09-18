package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.FestiveRoomBooking;
import server.repository.FestiveRoomBookingServicesRepository;
import server.service.FestiveRoomService;
import server.repository.FestiveRoomBookingRepository;
import server.service.ClientService;
import server.service.FestiveRoomBookingService;

import java.util.Date;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by molla on 27/08/2017.
 */

@RestController
@RequestMapping("/api/festiveRoomBooking")
public class FestiveRoomBookingController {

    @Autowired
    private FestiveRoomService festiveRoomService;

    @Autowired
    private FestiveRoomBookingRepository festiveRoomBookingRepository;

    @Autowired
    private FestiveRoomBookingServicesRepository festiveRoomBookingServicesRepository;

    @Autowired
    private FestiveRoomBookingService festiveRoomBookingService;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public FestiveRoomBooking addFestiveRoomBooking(@RequestBody FestiveRoomBooking festiveRoomBooking, @RequestParam("token") String token) {

        if (clientService.findByToken(token) != null && festiveRoomService.festiveRoomFree(festiveRoomBooking.getDateStart(), festiveRoomBooking.getDateEnd(), festiveRoomBooking.getIdFestiveRoom())) {

            festiveRoomBooking.setDateBook(new Date());
            festiveRoomBooking.setStatus("inactive");

            return festiveRoomBookingRepository.save(festiveRoomBooking);
        }

        return null;
    }

    @RequestMapping(path = "/validate", method = POST)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public FestiveRoomBooking validateFestiveRoomBooking(@RequestParam ("id") Long id, @RequestParam("token") String token) {

        FestiveRoomBooking festiveRoomBooking = festiveRoomBookingRepository.getOne(id);

        if (clientService.findByToken(token) != null && festiveRoomBooking != null) {
            festiveRoomBooking.setStatus("active");

            return festiveRoomBookingRepository.save(festiveRoomBooking);
        }

        return null;
    }

    @RequestMapping(path = "/getPrice", method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public float getFestiveRoomBookingPrice(@RequestParam("id") Long id, @RequestParam("token") String token) {

        FestiveRoomBooking festiveRoomBooking = festiveRoomBookingRepository.getOne(id);

        if (clientService.findByToken(token) != null && festiveRoomBooking != null) {
            return festiveRoomBookingService.calculatePrice(id);
        }

        return 0f;
    }

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<FestiveRoomBooking> getListFestiveRoomBookings(@RequestParam("token") String token) {

        if (clientService.adminAccess(token)) {
            festiveRoomBookingRepository.findAll();
        }

        return null;
    }
}
