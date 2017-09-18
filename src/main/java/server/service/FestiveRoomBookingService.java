package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.FestiveRoom;
import server.model.FestiveRoomBooking;
import server.model.FestiveRoomBookingServices;
import server.repository.FestiveRoomBookingRepository;
import server.repository.FestiveRoomRepository;
import server.utils.DateComparer;

import java.util.Date;
import java.util.List;

/**
 * Created by molla on 27/08/2017.
 */

@Service
public class FestiveRoomBookingService {

    @Autowired
    private FestiveRoomRepository festiveRoomRepository;

    @Autowired
    private FestiveRoomBookingRepository festiveRoomBookingRepository;

    public float calculatePrice(Long id){
        FestiveRoomBooking festiveRoomBooking = festiveRoomBookingRepository.getOne(id);

        int days = DateComparer.getDaysBetweenDates(festiveRoomBooking.getDateEnd(), festiveRoomBooking.getDateStart());
        float  price = (festiveRoomRepository.getOne(festiveRoomBooking.getIdFestiveRoom()).getPrice() * days);

        for (FestiveRoomBookingServices frbs : festiveRoomBooking.getFestiveRoomBookingServices()) {
            price += (frbs.getFestiveRoomService().getPrice() * frbs.getQuantity() * days);
        }

        return price;
    }

}
