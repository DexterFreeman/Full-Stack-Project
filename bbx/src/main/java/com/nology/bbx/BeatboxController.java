package com.nology.bbx;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin
@RestController
public class BeatboxController {

    @Autowired
    BeatboxService beatboxService;

    @GetMapping("/beatboxers")
    public ResponseEntity<List<Beatboxer>> getBeatboxers(){
        return ResponseEntity.status(HttpStatus.OK).body(beatboxService.getAllBeatboxers());

    }

    @GetMapping("/beatboxer/{id}")
    public Beatboxer getBeatboxer(@PathVariable long id){
        return beatboxService.getBeatboxerByID(id);
    }

    @GetMapping("/beatboxers/list")
    public ResponseEntity<List<String>> getBeatboxerNames(){
        return ResponseEntity.status(HttpStatus.OK).body(beatboxService.getBeatboxerNames());
    }


    @DeleteMapping("/beatboxer/delete/{id}")
    public boolean deleteBeatboxer(@PathVariable long id){
        return beatboxService.deleteBeatboxerByID(id);
    }


    @PostMapping("/beatboxer")
    public ResponseEntity<Beatboxer> addBeatboxer(@RequestBody Beatboxer beatboxer){
        return ResponseEntity.status(HttpStatus.OK).body(beatboxService.addBeatboxer(beatboxer));
    }


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
