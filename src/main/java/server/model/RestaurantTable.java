package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jdk.nashorn.internal.objects.annotations.*;
import lombok.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "restaurantTable")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RestaurantTable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_restaurant_table")
    private Long id;

    @Column(name = "number")
    private String number;

    @Column(name = "number_chairs")
    private int numberChairs;

}