package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import server.model.Client;
import server.repository.ClientRepository;
import server.service.ClientService;
import server.service.SecurityClientService;

import java.util.Date;
import java.util.List;

import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private SecurityClientService securityClientService;

    @RequestMapping(path = "/login", method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public Client login(@RequestParam("email") String email, @RequestParam("password") String password) {
        String pswd = securityClientService.hashPassword(password);
        Client client = clientService.login(email, pswd);

        if(client != null){
            clientRepository.save(client);
            return client;
        } else {
            throw new IllegalArgumentException("error");
        }
    }


    @RequestMapping(path = "/logout", method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public boolean logout(@RequestParam("token") String token){
        Client client = clientService.findByToken(token);
        client.setToken(null);
        client.setTokenDate(null);
        clientService.updateClient(client);

        return true;
    }


    @RequestMapping(method = GET, value="/adminGetList")
    @ResponseStatus(HttpStatus.FOUND)
    public List<Client> getListIsAdmin(@RequestParam("token") String tokenClient) {
        if(clientService.adminAccess(tokenClient)){
            return clientRepository.findAll();
        }

        return null;
    }


    @RequestMapping(path = "/reloadToken", method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public Date reloadToken(@RequestParam("token") String token){
        Client client = clientService.findByToken(token);
        if(client != null){
            return client.getTokenDate();
        } else {
            return null;
        }
    }

    @RequestMapping(path = "/getByToken", method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public Client getClientByToken(@RequestParam("token") String token){
        Client client = clientService.findByToken(token);

        if(client != null){
            return clientService.findByToken(token);
        }

        return null;
    }


    @RequestMapping(path = "/confirmation", method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public Client confirmation(@RequestParam("email") String email, @RequestParam("code") String code) {
        Client client = clientService.confirmation(email, code);

        if (client != null) {
            client.setCode("OK");
            client.setStatusActif("active");
            clientService.updateClient(client);

            return client;
        } else {
            throw new IllegalArgumentException("error");
        }
    }


    @RequestMapping(value = "/recovery", method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public void recoveryPasswordClient(@RequestParam("email") String email){
        Client client = clientRepository.findClientByEmailEquals(email);
        if(client != null) {
            String newPassword = securityClientService.generateNewPassword();
            client.setPassword(securityClientService.hashPassword(newPassword));

            clientRepository.save(client);
            //TODO Send new password by email
        }
    }


    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Client addClient(@RequestBody Client client) {

        Client clientExist = clientRepository.findClientByEmailEquals(client.getEmail());
        if (clientExist == null) {
            client.setCode(securityClientService.createCodeClient());
            client.setPassword(securityClientService.hashPassword(client.getPassword()));
            client.setStatusActif("inactive"); // active / removed
            client.setAccreditation("user"); // admin

            return clientRepository.save(client);
        } else {
            return null;
        }
    }

    @RequestMapping(path = "/update",method = POST)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Client updateClient(@RequestBody Client newClient, @RequestParam("token") String token, @RequestParam("password") String password) {
        Client client = clientService.findByToken(token);
        String psw = securityClientService.hashPassword(password);
        return clientService.updateNewInformationsClient(newClient, client, psw);
    }


    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public String deleteClient(@RequestParam("token") String token){
        Client client = clientRepository.findClientByTokenEquals(token);
        client.setStatusActif("removed");
        clientRepository.save(client);
        return "redirect:index.html";
    }
}
