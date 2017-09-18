package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.Article;
import server.repository.ArticleRepository;
import server.service.ArticleService;
import server.service.ClientService;

import java.util.List;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.*;


@RestController
@RequestMapping("/api/article")
public class ArticleController {

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping( path = "/all", method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<Article> getAllArticles(){
        return articleRepository.findAll();
    }

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public Article getArticleById(@PathVariable Long id){
        return articleRepository.getOne(id);
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addArticle(@RequestBody Article article, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            articleRepository.save(article);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateArticle(@RequestBody Article article, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            articleRepository.save(article);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public void deleteArticle(@RequestParam("id") Long id, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            articleRepository.delete(id);
        }
    }

}
