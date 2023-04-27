package com.nology.bbx;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
@Repository
public interface BeatboxRepository extends JpaRepository<Beatboxer, Long> {

//    @Query(value="SELECT highlight_video FROM beatboxer", nativeQuery = true)
//    ArrayList<String> getDistinctHighlightVideos();

    List<Beatboxer> getAllByNationality(String nationality);
    void deleteBeatboxerById(long id);

}