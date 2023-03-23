package com.nology.bbx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BeatboxController {

    @Autowired
    BeatboxRepository beatboxRepository;
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/beatboxers")
    public List<Beatboxer> getBeatboxers(){
        return beatboxRepository.getAllBeatboxers();

    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/beatboxer/{id}")
    public Beatboxer getBeatboxer(@PathVariable long id){
        return beatboxRepository.getBeatboxerByID(id);
    }
}
