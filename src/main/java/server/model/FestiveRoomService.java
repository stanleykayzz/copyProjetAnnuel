package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by maxime on 06/09/2017.
 */

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "festiveRoomService")
@JsonIgnoreProperties(ignoreUnknown = true)
public class FestiveRoomService {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_festive_room_service")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private float price;

    @Column(name = "quantity")
    private int quantity;

}
