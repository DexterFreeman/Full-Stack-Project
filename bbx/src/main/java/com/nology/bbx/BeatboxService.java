package com.nology.bbx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class BeatboxService {

    @Autowired
    BeatboxRepository beatboxRepository;


    public List<Beatboxer> getAllBeatboxers(){
        return beatboxRepository.findAll();
    }

    public Beatboxer getBeatboxerByID(long ID){
        for (Beatboxer beatboxer: beatboxRepository.findAll()) {
            if(beatboxer.getId() == ID){
                return beatboxer;
            }
        }
        return null;

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

    public List<String> getBeatboxerVideos(){
        ArrayList<String> videoList = new ArrayList<>();
        for (Beatboxer beatboxer : beatboxRepository.findAll()) {
            videoList.add(beatboxer.getHighlightVideo());
        }
        return videoList;
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

    public List<Beatboxer> getBeatboxersByNationality(String nationality){
        return beatboxRepository.getAllByNationality(nationality);
    }

    public Beatboxer updateBeatboxer(long id, Beatboxer newBeatboxer ){
        newBeatboxer.setId(id);
        beatboxRepository.save(newBeatboxer);
        return newBeatboxer;
    }


}
