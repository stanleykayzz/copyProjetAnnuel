package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "festiveRoom")
@JsonIgnoreProperties(ignoreUnknown = true)
public class FestiveRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_festive_room")
    private Long id;

    @Column (name = "price")
    private float price;

}