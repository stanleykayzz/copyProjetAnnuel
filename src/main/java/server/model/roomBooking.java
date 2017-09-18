package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Null;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "roomBooking")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_room_booking")
    private Long id;

    @Column(name = "date_start")
    private Date dateStart;

    @Column(name = "date_end")
    private Date dateEnd;

    @Column(name = "date_book")
    private Date dateBook;

    @Column(name = "id_client")
    private Long idClient;

    @Column(name = "id_room")
    private Long idRoom;

    @Column(name = "id_room_category")
    private Long idRoomCategory;

    @Column(name = "reason")
    private String reason;

    @Column(name = "status")
    private String status;

    @Column(name = "ref_room_book")
    private String refRoomBook;

    @OneToMany(mappedBy = "roomBooking", cascade = CascadeType.ALL)
    private Set<RoomBookingServices> roomBookingServices;
}
