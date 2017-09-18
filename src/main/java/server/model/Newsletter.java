package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import javax.persistence.Table;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "newsLetter")
@JsonIgnoreProperties(ignoreUnknown = true)
public class NewsLetter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_news_letter")
    private Long id;

    @Column(name = "content")
    private String content;

    @Column(name = "reason")
    private String reason;
}