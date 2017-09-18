package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import server.service.*;

import javax.persistence.*;

/**
 * Created by maxime on 06/09/2017.
 */

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "roomBookingServices")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomBookingServices {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_room_booking_services")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_room_booking")
    private RoomBooking roomBooking;

    @ManyToOne
    @JoinColumn(name = "id_room_service")
    private RoomService roomService;

}
