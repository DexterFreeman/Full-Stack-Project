package com.nology.bbx;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class BeatboxRepository {

    private ArrayList<Beatboxer> beatboxers = new ArrayList<>();


    public ArrayList<Beatboxer> getAllBeatboxers(){
        return beatboxers;
    }

    public Beatboxer getBeatboxerByID(long ID){
        for (Beatboxer beatboxer: beatboxers) {
            if(beatboxer.getId() == ID){
                return beatboxer;
            }
        }
        return null;

    }

    public Beatboxer addBeatboxer(Beatboxer beatboxer){
        beatboxers.add(beatboxer);
        return beatboxer;
    }
}
