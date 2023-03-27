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
    BeatboxService beatboxService;
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/beatboxers")
    public List<Beatboxer> getBeatboxers(){
        return beatboxService.getAllBeatboxers();

    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/beatboxer/{id}")
    public Beatboxer getBeatboxer(@PathVariable long id){
        return beatboxService.getBeatboxerByID(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/beatboxers/list")
    public List<String> getBeatboxerNames(){
        return beatboxService.getBeatboxerNames();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/beatboxer/{id}")
    public boolean deleteBeatboxer(@PathVariable long id){
        return beatboxService.deleteBeatboxerByID(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/beatboxer")
    public Beatboxer addBeatboxer(@RequestBody Beatboxer beatboxer){
        return beatboxService.addBeatboxer(beatboxer);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/beatboxer/random")
    public Beatboxer getRandomBeatboxer(){
        Random random = new Random(); 
        return beatboxService.getBeatboxerByID(random.nextInt(beatboxService.getAllBeatboxers().size()));
    }
    
    @PutMapping("/beatboxer/{id}")
    public Beatboxer updateBeatboxer(@PathVariable long id, @RequestBody Beatboxer beatboxer){
        return beatboxService.updateBeatboxer(id, beatboxer);
    }
}
