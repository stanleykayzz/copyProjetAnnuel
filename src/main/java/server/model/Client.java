package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
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
@Table(name = "client")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_client")
    private Long id;

    @Column(name = "lastname")
    @NotEmpty(message = "A client must have a name")
    private String lastName;

    @Column(name = "firstname")
    @NotEmpty(message = "A client must have a first name")
    private String firstName;

    @Column(name = "sexe")
    private String sexe;

    @Column(name = "birthday")
    private Date birthday;

    @Column(name = "email", unique = true)
    @NotEmpty(message = "A person must have an Email")
    private String email;

    @Column(name = "phone")
    @NotEmpty(message = "A person must have an Phone")
    private String phone;

    @Column(name = "country")
    @NotEmpty(message = "A person must have a Country")
    private String country;

    @Column(name = "city")
    @NotEmpty(message = "A person must have a City")
    private String city;

    @Column(name = "address")
    @NotEmpty(message = "A person must have an Address")
    private String address;

    @Column(name = "postal_code")
    @NotEmpty(message = "A person must have an Postal_code")
    private String postalCode;

    @Column(name = "password")
    @NotNull
    private String password;

    @Column(name = "token")
    private String token;

    @Column(name = "token_date")
    private Date tokenDate;

    @Column(name = "code")
    private String code;

    @Column(name = "accreditation")
    private String accreditation;

    @Column(name = "status_actif")
    private String statusActif;
}
