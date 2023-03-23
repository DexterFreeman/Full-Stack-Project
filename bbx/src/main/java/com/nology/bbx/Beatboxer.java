package com.nology.bbx;

import java.util.List;

public class Beatboxer {

    private long id;
    private String name;
    private String nationality;
    private String realName;
    private String thumbnail;
    private List<String> notableSounds;
    private List<Object> achievements;

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

    public void setNotableSounds(List<String> notableSounds) {
        this.notableSounds = notableSounds;
    }

    public List<Object> getAchievements() {
        return achievements;
    }

    public void setAchievements(List<Object> achievements) {
        this.achievements = achievements;
    }

    public Beatboxer(){

    }
    public Beatboxer(long id, String name, String nationality, String realName, String thumbnail, List<String> notableSounds, List<Object> achievements) {
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.realName = realName;
        this.thumbnail = thumbnail;
        this.notableSounds = notableSounds;
        this.achievements = achievements;
    }
}
