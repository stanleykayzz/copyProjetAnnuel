package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.NewsLetter;
import server.repository.NewsLetterRepository;
import server.service.ClientService;
import server.service.NewsLetterService;
import java.util.List;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;


@RestController
@RequestMapping("/api/newsletter")
public class NewsLetterController {

    @Autowired
    private NewsLetterRepository newsLetterRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<NewsLetter> listNewsLetter(@RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            return newsLetterRepository.findAll();
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addNewsLetter(@RequestBody NewsLetter newsLetter, @RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            newsLetterRepository.save(newsLetter);

            //TODO Envoie de la newsLetter aux clients visés
        }

    }
}
