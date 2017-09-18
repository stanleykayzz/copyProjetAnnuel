package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by maxime on 04/09/2017.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "invalidBookingDateRoom")
@JsonIgnoreProperties(ignoreUnknown = true)
public class InvalidBookingDateRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_invalid_booking_date_room")
    private Long id;

    @Column(name = "date_start")
    private Date dateStart;

    @Column(name = "date_end")
    private Date dateEnd;

    @Column(name = "status")
    private String status;

    @Column(name = "id_room")
    private Long idRoom;
}
