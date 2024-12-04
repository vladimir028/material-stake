package com.example.finkishare.repository;

import com.example.finkishare.model.SubjectDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectDetailsRepository extends JpaRepository<SubjectDetails, Long> {
    SubjectDetails findByName(String name);


    @Query(value = "SELECT s.* FROM subject_details s " +
            "JOIN finkishare_user_taken_subjects uts ON s.id = uts.taken_subjects_id " +
            "WHERE uts.finkishare_user_username = :username",
            nativeQuery = true)
    List<SubjectDetails> findTakenSubjectsByUsername(@Param("username") String username);


    List<SubjectDetails> findAllByIsTakenTrue();
}
