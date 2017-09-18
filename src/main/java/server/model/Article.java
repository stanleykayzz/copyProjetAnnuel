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
@Table(name = "article")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_article")
    private Long id;

    @Column(name = "title")
    @NotEmpty(message = "An article must have a title")
    private String title;

    @Column(name = "content")
    @NotEmpty(message = "An article must have a content")
    private StringBuilder content;

    @Column(name = "date")
    @NotEmpty(message = "An article must have a date")
    private Date date;

    @Column(name = "picture_path")
    @NotEmpty(message = "An article must have a picture path ")
    private String picturePath;


}