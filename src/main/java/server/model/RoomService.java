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
@Table(name = "roomService")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomService {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_room_service")
    private Long id;

    @Column(name = "name")
    @NotEmpty(message = "A service must have a name")
    private String name;

    @Column(name = "price")
    private float price;

}
