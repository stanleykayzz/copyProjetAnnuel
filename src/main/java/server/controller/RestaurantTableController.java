package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.RestaurantTable;
import server.repository.RestaurantTableRepository;
import server.service.ClientService;
import server.service.RestaurantTableService;
import java.util.List;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping("/api/restaurantTable")
public class RestaurantTableController {

    @Autowired
    private RestaurantTableRepository restaurantTableRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(value = OK)
    public List<RestaurantTable> getAllTablesList(){
        return restaurantTableRepository.findAll();
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void createRestaurantTable(@RequestBody RestaurantTable restaurantTable, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            restaurantTableRepository.save(restaurantTable);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateRestaurantTable(@RequestBody RestaurantTable restaurantTable, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            restaurantTableRepository.save(restaurantTable);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteRestaurantTable(@RequestParam("id") Long id, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            restaurantTableRepository.delete(id);
        }
    }
}