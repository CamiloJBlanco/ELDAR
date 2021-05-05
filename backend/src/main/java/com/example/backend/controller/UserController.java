package com.example.backend.controller;

import com.example.backend.converter.UserToUserDTOConverter;
import com.example.backend.model.User;
import com.example.backend.model.dto.UserDTO;
import com.example.backend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//methods= {RequestMethod.GET,RequestMethod.DELETE, RequestMethod.POST}
@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ConversionService conversionService;

    @Autowired
    private UserToUserDTOConverter userToUserDTOConverter;

    @GetMapping("users")
    @Operation(summary = "lista de Users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/userDTO")
    @Operation(summary = "Lista de users DTO (sin dni)")
    public List<UserDTO> getAllUsersDTO(){
        return conversionService.convert(userService.getUsers(), List.class);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Consulta user por id")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @GetMapping("/userDTO/{id}")
    @Operation(summary = "Consulta user DTO por id")
    public UserDTO getUserDTOByID(@PathVariable Long id){
        return conversionService.convert(userService.getUser(id), UserDTO.class);
    }

    @PostMapping("/user")
    @Operation(summary = "Dar de alta un user")
    public String addUser(@RequestBody User user) {
        User postuser = userService.addUser(user);
        return ("User creado: " + postuser);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Borrar user por id")
    public String deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return ("User borrado con id: " + id);
    }

    @PutMapping("/user/{id}")
    @Operation(summary = "Editar user")
    public String editUser(@RequestBody User user){
        User putuser = userService.editUser(user);
        return ("User editado " + putuser);
    }
}
