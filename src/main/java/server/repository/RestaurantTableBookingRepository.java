package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import server.model.RestaurantTableBooking;

import java.util.Date;
import java.util.List;

/**
 * Created by maxime on 09/09/2017.
 */
@Repository
public interface RestaurantTableBookingRepository extends JpaRepository<RestaurantTableBooking, Long> {

    @Query("select rtb from  RestaurantTableBooking rtb where date >= :dateStart and date <= :dateEnd")
    List<RestaurantTableBooking> getBook(@Param("dateStart")Date dateStart, @Param("dateEnd") Date dateEnd);

}
