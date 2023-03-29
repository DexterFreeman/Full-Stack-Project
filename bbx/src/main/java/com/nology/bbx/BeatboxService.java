package com.nology.bbx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class BeatboxService {

    @Autowired
    BeatboxRepository beatboxRepository;


    public List<Beatboxer> getAllBeatboxers(){
        return beatboxRepository.findAll();
    }

    public Beatboxer getBeatboxerByID(long ID){
        Optional<Beatboxer> beatboxer = beatboxRepository.findById(ID);
        if (beatboxer.isEmpty()){
            return null;
        }

        return beatboxer.get();

    }

    public Beatboxer getBeatboxerByName(String name){
        for(Beatboxer beatboxer: beatboxRepository.findAll()){
            if(Objects.equals(beatboxer.getName(), name)){
                return beatboxer;
            }
        }
        return null;
    }

    public Beatboxer addBeatboxer(Beatboxer beatboxer){
        beatboxRepository.save(beatboxer);
        return beatboxer;
    }

    public List<String> getBeatboxerNames(){
        ArrayList<String> namesList = new ArrayList<>();
        for (Beatboxer beatboxer : beatboxRepository.findAll()) {
            namesList.add(beatboxer.getName());
        }
        return namesList;
    }

    @Transactional
    public boolean deleteBeatboxerByID(long ID){
        for (Beatboxer beatboxer : beatboxRepository.findAll()) {
            if(beatboxer.getId() == ID){
                beatboxRepository.deleteBeatboxerById(beatboxer.getId());
                return true;
            }
        }
        return false;
    }

    public Beatboxer updateBeatboxer(long id, Beatboxer newBeatboxer ){
        newBeatboxer.setId(id);
        beatboxRepository.save(newBeatboxer);
        return newBeatboxer;
    }

}
