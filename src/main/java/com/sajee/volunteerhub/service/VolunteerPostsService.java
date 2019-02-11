package com.sajee.volunteerhub.service;

import com.sajee.volunteerhub.dao.VolunteerPostsRepo;
import com.sajee.volunteerhub.entity.VolunteerPosts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VolunteerPostsService {
    @Autowired
    private VolunteerPostsRepo volunteerPostsRepo;

    public List<VolunteerPosts> getVolunteerPosts() {
        List<VolunteerPosts> products = new ArrayList<>();
        volunteerPostsRepo.findAll().forEach(products::add); //fun with Java 8
        return products;
    }

    public Optional<VolunteerPosts> getVolunteerPostsById(Long id) {
        return volunteerPostsRepo.findById(id);
    }

    public VolunteerPosts saveOrUpdateVolunteerPosts(VolunteerPosts volunteerPosts) {
        volunteerPostsRepo.save(volunteerPosts);
        return volunteerPosts;
    }

    public void deleteVolunteerPostsById(int id) {
        volunteerPostsRepo.deleteById(Long.valueOf(id));
    }

    public VolunteerPosts updateVolunteerPosts(VolunteerPosts volunteerPosts) {
        volunteerPostsRepo.save(volunteerPosts);
        return volunteerPosts;
    }

}
