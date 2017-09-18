package server.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.validator.constraints.NotEmpty;

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
@Table(name = "roomCategory")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_room_category")
    private Long id;

    @Column(name = "name")
    @NotEmpty(message = "A category must have a name")
    private String name;

    @Column(name = "price")
    private float price;
}
