package com.nology.bbx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BeatboxService {

    @Autowired
    BeatboxRepository beatboxRepository;


    public ArrayList<Beatboxer> getAllBeatboxers(){
        return beatboxRepository.getAllBeatboxers();
    }

    public Beatboxer getBeatboxerByID(long ID){
        for (Beatboxer beatboxer: beatboxRepository.getAllBeatboxers()) {
            if(beatboxer.getId() == ID){
                return beatboxer;
            }
        }
        return null;

    }

    public Beatboxer addBeatboxer(Beatboxer beatboxer){
        beatboxRepository.addBeatboxer(beatboxer);
        return beatboxer;
    }

    public List<String> getBeatboxerNames(){
        ArrayList<String> namesList = new ArrayList<>();
        for (Beatboxer beatboxer : beatboxRepository.getAllBeatboxers()) {
            namesList.add(beatboxer.getName());
        }
        return namesList;
    }

    public boolean deleteBeatboxerByID(long ID){
        for (Beatboxer beatboxer : beatboxRepository.getAllBeatboxers()) {
            if(beatboxer.getId() == ID){
                beatboxRepository.deleteBeatboxerByID(beatboxer.getId());
                return true;
            }
        }
        return false;
    }

    public Beatboxer updateBeatboxer(long id, Beatboxer newBeatboxer ){
        beatboxRepository.updateBeatboxer(id, newBeatboxer);
        return null;
    }

}
