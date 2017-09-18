package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import server.model.FestiveRoomBooking;
import server.model.RoomBooking;

import java.util.List;

/**
 * Created by molla on 27/08/2017.
 */

@Repository
public interface FestiveRoomBookingRepository extends JpaRepository<FestiveRoomBooking, Long>{

}
