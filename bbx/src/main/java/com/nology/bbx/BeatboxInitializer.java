package com.nology.bbx;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
import java.io.*;
import java.util.List;
@Component
public class BeatboxInitializer {

    private final BeatboxRepository beatboxRepository;

    @Value("classpath:data.json")
    private Resource resourceFile;


    @Autowired
    public BeatboxInitializer(BeatboxRepository beatboxRepository){
        this.beatboxRepository = beatboxRepository;
    }

    @PostConstruct
    public void init(){
        JSONParser jsonParser = new JSONParser();
        try (FileReader reader = new FileReader(resourceFile.getFile())) {
            Object obj = jsonParser.parse(reader);

            JSONArray jsonArray = (JSONArray) obj;

            for (Object beatbox : jsonArray) {
                JSONObject beatboxJSON = (JSONObject) beatbox;

                long id = (long) beatboxJSON.get("id");
                String name = (String) beatboxJSON.get("name");
                String nationality = (String) beatboxJSON.get("nationality");
                String description = (String) beatboxJSON.get("description");
                String realName = (String) beatboxJSON.get("real_name");
                String thumbnail = (String) beatboxJSON.get("thumbnail");
                String highlightVideo = (String) beatboxJSON.get("highlight_video");
                List<String> notableSounds = (List<String>) beatboxJSON.get("notable_sounds");
                List<Object> achievements = (List<Object>) beatboxJSON.get("achievements");


                // HOW CAN WE USE THIS DATA?
                beatboxRepository.addBeatboxer(new Beatboxer(id, name, nationality, realName, description, thumbnail, notableSounds, highlightVideo, achievements));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
