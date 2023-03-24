package com.nology.bbx;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
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

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/beatboxers/list")
    public List<String> getBeatboxerNames(){
        return beatboxRepository.getBeatboxerNames();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/beatboxer/{id}")
    public boolean deleteBeatboxer(@PathVariable long id){
        return beatboxRepository.deleteBeatboxerByID(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/beatboxer")
    public Beatboxer addBeatboxer(@RequestBody Beatboxer beatboxer){
        return beatboxRepository.addBeatboxer(beatboxer);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/beatboxer/random")
    public Beatboxer getRandomBeatboxer(){
        Random random = new Random(); 
        return beatboxRepository.getBeatboxerByID(random.nextInt(beatboxRepository.getAllBeatboxers().size()));
    }
    
    @PutMapping("/beatboxer/{id}")
    public Beatboxer updateBeatboxer(@PathVariable long id, @RequestBody Beatboxer beatboxer){
        return beatboxRepository.updateBeatboxer(id, beatboxer); 
    }
}
