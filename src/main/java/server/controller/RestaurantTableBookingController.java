package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.RestaurantTableBooking;
import server.repository.RestaurantTableBookingRepository;
import server.service.ClientService;
import server.service.RestaurantTableBookingService;

import java.util.Date;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/restaurantTableBooking")
public class RestaurantTableBookingController {

    @Autowired
    private RestaurantTableBookingRepository restaurantTableBookingRepository;
    @Autowired
    private RestaurantTableBookingService restaurantTableBookingService;


    @Autowired
    private ClientService clientService;

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addRestaurantTableBooking(@RequestBody RestaurantTableBooking restaurantTableBooking, @RequestParam("token") String token){

        restaurantTableBooking.setBookingDate(new Date());

        if(clientService.findByToken(token) != null && restaurantTableBookingService.validateRestaurantTableBooking(restaurantTableBooking) != -1){
            System.out.println(restaurantTableBooking.getDate());
            if(restaurantTableBookingService.validateRestaurantTableBooking(restaurantTableBooking) == 0){
                if(restaurantTableBooking.getNumber() <= restaurantTableBookingService.getNumberPlaceFree(12, 0, 13, 15)){
                    restaurantTableBookingRepository.save(restaurantTableBooking);
                }
            }

            if(restaurantTableBookingService.validateRestaurantTableBooking(restaurantTableBooking) == 1){
                if(restaurantTableBooking.getNumber() <= restaurantTableBookingService.getNumberPlaceFree(19, 30, 21, 45)){
                    restaurantTableBookingRepository.save(restaurantTableBooking);
                }
            }
        }
    }

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<RestaurantTableBooking> listRestaurantTableBooking(@RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            return restaurantTableBookingRepository.findAll();
        }

        return null;
    }
}
