package com.example.finkishare.service;

import com.example.finkishare.model.Attachment;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface AttachmentService {
    Attachment saveAttachment(MultipartFile file, String description,  Long subjectId, String username) throws Exception;

    Attachment getAttachment(String fileId) throws Exception;

    List<Attachment> getAllAttachmentsBySubject(long parseLong);
}
