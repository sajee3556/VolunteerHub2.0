package com.sajee.volunteerhub.controller;

import com.sajee.volunteerhub.entity.VolunteerPosts;
import com.sajee.volunteerhub.service.VolunteerPostsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class VolunteerPostsController {
    @Autowired
    private VolunteerPostsService volunteerPostsService;

    @RequestMapping(method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public List<VolunteerPosts> getStudents() {
        return volunteerPostsService.getVolunteerPosts();
    }

    @RequestMapping(value="/",method = RequestMethod.GET)
    public String homepage(){
        return "index";
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<VolunteerPosts> getStudentById(@PathVariable("id") Long id) {
        return volunteerPostsService.getVolunteerPostsById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteStudentById(@PathVariable("id")int id) {
        volunteerPostsService.deleteVolunteerPostsById(id);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin(origins = "http://localhost:3000")
    public VolunteerPosts addStudent(@RequestBody VolunteerPosts volunteerPosts) {
        return volunteerPostsService.saveOrUpdateVolunteerPosts(volunteerPosts);
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin(origins = "http://localhost:3000")
    public void updateStudent(@RequestBody VolunteerPosts volunteerPosts) {
        volunteerPostsService.saveOrUpdateVolunteerPosts(volunteerPosts);
    }

}
