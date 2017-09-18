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
@Table(name = "building")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Building {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_building")
    private Long id;

    @Column(name = "name")
    @NotEmpty(message = "A building must have a name")
    private String name;

}