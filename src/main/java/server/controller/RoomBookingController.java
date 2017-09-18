package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.model.RoomBooking;
import server.model.*;
import server.repository.*;
import server.service.*;
import server.service.RoomService;
import server.utils.DateComparer;

import java.util.*;

import static org.springframework.http.HttpStatus.FOUND;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/roomBooking")
public class RoomBookingController {
    @Autowired
    private ClientService clientService;

    @Autowired
    private RoomBookingService roomBookingService;

    @Autowired
    private RoomBookingRepository roomBookingRepository;

    @Autowired
    private RoomBookingServicesRepository roomBookingServicesRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomService roomService;

    @Autowired
    private BuildingRepository buildingRepository;

    @Autowired
    private RoomCategoryService roomCategoryService;

    @RequestMapping(method = POST)
    @ResponseStatus(value = CREATED)
    public String addRoomBooking(@RequestBody List<RoomBooking> listRoomBooking, @RequestParam("token") String token) {
        Client client = clientService.findByToken(token);
        boolean dateValide = DateComparer.dateValidator(listRoomBooking.get(0).getDateStart(), listRoomBooking.get(0).getDateEnd());

        if (client != null && dateValide) {
            Long refNumber = roomBookingService.getNumberRefBook(client.getId());
            String refBookRoom = "room_booking_" + client.getId() + "_" + refNumber;

            List<Room> listRoom = roomService.getListRoomFree(listRoomBooking.get(0).getDateStart(), listRoomBooking.get(0).getDateEnd());
            List<Building> listBuilding = buildingRepository.findAll();
            HashMap<Long, Integer> hmRoomCategory = roomCategoryService.getHashMapCategoryFromListRoomBook(listRoomBooking);

            List<Room> listValideRoomBooking = new ArrayList<>();
            listValideRoomBooking = roomService.findListRoomBooking(listValideRoomBooking, hmRoomCategory, listRoom, listBuilding);

            if (listValideRoomBooking.size() == listRoomBooking.size()) {
                for (RoomBooking rb : listRoomBooking) {
                    List<Room> tmpLs = new ArrayList<Room>(listValideRoomBooking);
                    for (Room r : tmpLs) {
                        if (Objects.equals(r.getRoomCategory().getId(), rb.getIdRoomCategory())) {

                            rb.setRefRoomBook(refBookRoom);
                            rb.setStatus("inactive");
                            rb.setDateBook(new Date());
                            rb.setIdRoom(r.getId());
                            rb.setIdClient(client.getId());

                            roomBookingRepository.save(rb);
                            listValideRoomBooking.remove(r);

                            break;
                        }
                    }
                }
                return refBookRoom;
            }
            return "";
        }
        return "";
    }

    @RequestMapping(path = "/validate", method = POST)
    @ResponseStatus(value = OK)
    public void updateListRoomBookingStatus(@RequestParam("refBookRoom") String refBookRoom, @RequestParam("token") String token) {
        Client client = clientService.findByToken(token);

        if (client != null) {
            List<RoomBooking> listRoomBooking = roomBookingService.getListRoomBookingByRefBookRoom(refBookRoom);

            for (RoomBooking rb : listRoomBooking) {
                if (Objects.equals(rb.getIdClient(), client.getId())) {
                    rb.setStatus("active");
                    roomBookingRepository.save(rb);
                }
            }
        }
    }

    @RequestMapping(path = "/getPrice", method = GET)
    @ResponseStatus(value = FOUND)
    public float getTotalPriceBook(@RequestParam("refBookRoom") String refBookRoom, @RequestParam("token") String token) {

        if (clientService.findByToken(token) != null || clientService.adminAccess(token)) {
            return roomBookingService.calculatePrice(refBookRoom);
        }

        return 0f;
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(value = FOUND)
    public void updateRoomBooking(@RequestBody RoomBooking roomBooking, @RequestParam("token") String token) {
        Client client = clientService.findByToken(token);

        if (((client != null) && Objects.equals(roomBooking.getIdClient(), client.getId())) || clientService.adminAccess(token)) {
            roomBookingRepository.save(roomBooking);
        }

    }
}
