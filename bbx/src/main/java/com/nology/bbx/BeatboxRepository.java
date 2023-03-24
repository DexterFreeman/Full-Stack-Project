package com.nology.bbx;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
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

    public List<String> getBeatboxerNames(){
        ArrayList<String> namesList = new ArrayList<>();
        for (Beatboxer beatboxer : beatboxers) {
            namesList.add(beatboxer.getName()); 
        }
        return namesList;
    }

    public boolean deleteBeatboxerByID(long ID){
        for (Beatboxer beatboxer : beatboxers) {
            if(beatboxer.getId() == ID){
                beatboxers.remove(beatboxer); 
                return true;
            }
        }
        return false; 
    }
    
    public Beatboxer updateBeatboxer(long id, Beatboxer newBeatboxer ){

        for (Beatboxer beatboxer : beatboxers) {
            if(beatboxer.getId() == id){
                beatboxer.setName(newBeatboxer.getName());
                beatboxer.setAchievements(newBeatboxer.getAchievements());
                beatboxer.setNationality(newBeatboxer.getNationality());
                beatboxer.setNotableSounds(newBeatboxer.getNotableSounds());
                beatboxer.setRealName(newBeatboxer.getRealName());
                beatboxer.setThumbnail(newBeatboxer.getThumbnail());
                return beatboxer;
            }
        }
        return null; 
    }

}
