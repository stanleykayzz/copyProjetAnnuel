package server.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import org.hibernate.validator.constraints.NotEmpty;
import org.omg.CORBA.ServerRequest;

import javax.persistence.*;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "room")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_room")
    private Long id;

    @Column(name = "number")
    @NotEmpty(message = "A room must have a number")
    private String number;

    @ManyToOne
    @JoinColumn(name="id_room_category")
    private RoomCategory roomCategory;

    @ManyToOne
    @JoinColumn(name="id_building")
    private Building building;
}
