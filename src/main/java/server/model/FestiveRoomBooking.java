package server.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "festiveRoomBooking")
@JsonIgnoreProperties(ignoreUnknown = true)
public class FestiveRoomBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_festive_room_booking")
    private Long id;

    @Column(name = "date_book")
    private Date dateBook;

    @Column(name = "date_start")
    private Date dateStart;

    @Column(name = "date_end")
    private Date dateEnd;

    @Column(name = "status")
    private String status;

    @Column(name = "id_festive_room")
    private Long idFestiveRoom;

    @Column(name = "id_client")
    private Long idClient;

    @OneToMany(mappedBy = "festiveRoomBooking", cascade = CascadeType.ALL)
    private Set<FestiveRoomBookingServices> festiveRoomBookingServices;

}
