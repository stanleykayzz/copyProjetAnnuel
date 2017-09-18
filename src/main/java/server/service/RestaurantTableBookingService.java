package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.RestaurantTable;
import server.model.RestaurantTableBooking;
import server.repository.RestaurantTableBookingRepository;
import server.repository.RestaurantTableRepository;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by maxime on 09/09/2017.
 */
@Service
public class RestaurantTableBookingService {

    @Autowired
    private RestaurantTableBookingRepository restaurantTableBookingRepository;

    @Autowired
    private RestaurantTableRepository restaurantTableRepository;

    public int validateRestaurantTableBooking(RestaurantTableBooking restaurantTableBooking){
        System.out.println(restaurantTableBooking.getDate());
        Long bookingTime = restaurantTableBooking.getDate().getTime();
        Long dateBookingTime = restaurantTableBooking.getBookingDate().getTime();

        Calendar minDay = Calendar.getInstance();
        minDay.set(Calendar.HOUR_OF_DAY,0);
        minDay.set(Calendar.MINUTE,0);
        minDay.set(Calendar.SECOND,0);
        minDay.set(Calendar.MILLISECOND,0);

        Calendar minAM = Calendar.getInstance();
        minAM.set(Calendar.HOUR_OF_DAY,11);
        minAM.set(Calendar.MINUTE,30);
        minAM.set(Calendar.SECOND,0);
        minAM.set(Calendar.MILLISECOND,0);

        Calendar maxAM = Calendar.getInstance();
        maxAM.set(Calendar.HOUR_OF_DAY,13);
        maxAM.set(Calendar.MINUTE,15);
        maxAM.set(Calendar.SECOND,0);
        maxAM.set(Calendar.MILLISECOND,0);

        Calendar minPM = Calendar.getInstance();
        //minPM.set(Calendar.HOUR_OF_DAY,18);
        minPM.set(Calendar.HOUR_OF_DAY,20);
        minPM.set(Calendar.MINUTE,30);
        minPM.set(Calendar.SECOND,0);
        minPM.set(Calendar.MILLISECOND,0);

        Calendar maxPM = Calendar.getInstance();
        maxPM.set(Calendar.HOUR_OF_DAY,21);
        maxPM.set(Calendar.MINUTE,45);
        maxPM.set(Calendar.SECOND,0);
        maxPM.set(Calendar.MILLISECOND,0);

        Date minDateDay = minDay.getTime();
        Date minDateAM = minAM.getTime();
        Date maxDateAM = maxAM.getTime();
        Date minDatePM = minPM.getTime();
        Date maxDatePM = maxPM.getTime();

        if(!(dateBookingTime >= minDateDay.getTime())) {
            return -1;
        }

        //System.out.println(bookingTime >= minDateAM.getTime());
        //System.out.println(bookingTime <= maxDateAM.getTime());
        System.out.println(bookingTime >= minDatePM.getTime());
        System.out.println(bookingTime <= maxDatePM.getTime());

        if((bookingTime >= minDateAM.getTime()) && (bookingTime <= maxDateAM.getTime())){
            if(minDateAM.getTime() >= dateBookingTime){
                return 0;
            }
        }

        if((bookingTime >= minDatePM.getTime()) && (bookingTime <= maxDatePM.getTime())){
            if(minDatePM.getTime() >= dateBookingTime){
                return 1;
            }
        }

        return -1;
    }

    public int getNumberPlaceFree(int hourStart, int minuteStart, int hourEnd, int minuteEnd){
        int nbPlaceFree = 0;

        Calendar minAM = Calendar.getInstance();
        minAM.set(Calendar.HOUR_OF_DAY,hourStart);
        minAM.set(Calendar.MINUTE,minuteStart);
        minAM.set(Calendar.SECOND,0);
        minAM.set(Calendar.MILLISECOND,0);

        Calendar maxAM = Calendar.getInstance();
        maxAM.set(Calendar.HOUR_OF_DAY,hourEnd);
        maxAM.set(Calendar.MINUTE,minuteEnd);
        maxAM.set(Calendar.SECOND,0);
        maxAM.set(Calendar.MILLISECOND,0);

        Date minDateAM = minAM.getTime();
        Date maxDateAM = maxAM.getTime();

        List<RestaurantTable> listTotal = restaurantTableRepository.findAll();
        List<RestaurantTableBooking> list = restaurantTableBookingRepository.getBook(minDateAM, maxDateAM);

        for(RestaurantTable r : listTotal){
            nbPlaceFree += r.getNumberChairs();
        }

        for(RestaurantTableBooking rtb : list){
            nbPlaceFree -= rtb.getNumber();
        }

        return nbPlaceFree;
    }
}
