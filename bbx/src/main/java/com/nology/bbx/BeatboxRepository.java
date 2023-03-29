package com.nology.bbx;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
@Repository
public interface BeatboxRepository extends JpaRepository<Beatboxer, Long> {

    void deleteBeatboxerById(long id);

}