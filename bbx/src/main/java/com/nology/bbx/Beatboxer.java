package com.nology.bbx;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
public class Beatboxer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String nationality;
    private String realName;

    private String description;

    private String highlightVideo;

    private String thumbnail;

    private ArrayList<String> notableSounds;

    private ArrayList<HashMap<String, String>> achievements;

    public String getHighlightVideo() {
        return highlightVideo;
    }

    public void setHighlightVideo(String highlightVideo) {
        this.highlightVideo = highlightVideo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public List<String> getNotableSounds() {
        return notableSounds;
    }

    public void setNotableSounds(ArrayList<String> notableSounds) {
        this.notableSounds = notableSounds;
    }

    public ArrayList<HashMap<String, String>> getAchievements() {
        return achievements;
    }

    public void setAchievements(ArrayList<HashMap<String, String>> achievements) {
        this.achievements = achievements;
    }

    public Beatboxer(){

    }
    public Beatboxer(long id, String name, String nationality, String realName, String description, String thumbnail, ArrayList<String> notableSounds, String highlightVideo, ArrayList<HashMap<String, String>> achievements) {
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.realName = realName;
        this.description = description;
        this.thumbnail = thumbnail;
        this.notableSounds = notableSounds;
        this.highlightVideo = highlightVideo;
        this.achievements = achievements;

    }
}
