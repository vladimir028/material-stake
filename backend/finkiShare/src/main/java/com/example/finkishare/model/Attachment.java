package com.example.finkishare.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Data
@NoArgsConstructor
@Table(name = "attachment_file")
public class Attachment {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String fileName;
    private String fileType;
    @Lob
    private byte[] data;
    private String description;
    @ManyToOne
    private SubjectDetails subjectDetails;
    @ManyToOne
    private User author;

    public Attachment(String fileName, String fileType, byte[] data, String description, SubjectDetails subjectDetails, User author) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.description = description;
        this.subjectDetails = subjectDetails;
        this.author = author;
    }
}
