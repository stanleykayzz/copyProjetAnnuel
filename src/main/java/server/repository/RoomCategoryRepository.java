package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.model.RoomCategory;

import java.util.List;

@Repository
public interface RoomCategoryRepository extends JpaRepository<RoomCategory, Long> {

    @Query("select rc from RoomCategory rc")
    List<RoomCategory> getListRoomCategories();

    @Transactional
    @Modifying
    @Query("delete from RoomCategory rc where id = :IdRoomCategory")
    void deleteRoomCategory(@Param("IdRoomCategory") Long id);

    RoomCategory findById(Long id);
}
