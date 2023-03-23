package com.nology.bbx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BeatboxController {

    @Autowired
    BeatboxRepository beatboxRepository;

    @GetMapping("/beatboxers")
    public List<Beatboxer> getBeatboxers(){
        return beatboxRepository.getAllBeatboxers();

    }

    @GetMapping("/beatboxer/{id}")
    public Beatboxer getBeatboxer(@PathVariable long id){
        return beatboxRepository.getBeatboxerByID(id);
    }
}
