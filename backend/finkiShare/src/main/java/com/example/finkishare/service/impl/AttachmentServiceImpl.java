package com.example.finkishare.service.impl;

import com.example.finkishare.model.Attachment;
import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.model.User;
import com.example.finkishare.repository.AttachmentRepository;
import com.example.finkishare.repository.SubjectDetailsRepository;
import com.example.finkishare.repository.UserRepository;
import com.example.finkishare.service.AttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AttachmentServiceImpl implements AttachmentService {
    private final AttachmentRepository attachmentRepository;
    private final SubjectDetailsRepository subjectDetailsRepository;
    private final UserRepository userRepository;

    @Override
    public Attachment saveAttachment(MultipartFile file, String description, Long subjectId, String username) throws Exception {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            if (fileName.contains("..")) {
                throw new Exception("Filename contains invalid path sequence "
                        + fileName);
            }

            SubjectDetails subjectDetails = subjectDetailsRepository.findById(subjectId).orElse(null);
            User author = userRepository.findByUsername(username).orElse(null);
            Attachment attachment
                    = new Attachment(fileName,
                    file.getContentType(),
                    file.getBytes(),
                    description,
                    subjectDetails,
                    author);

            return attachmentRepository.save(attachment);

        } catch (Exception e) {
            throw new Exception("Could not save File: " + fileName);
        }
    }

    @Override
    public Attachment getAttachment(String fileId) throws Exception {
        return attachmentRepository
                .findById(fileId)
                .orElseThrow(
                        () -> new Exception("File not found with Id: " + fileId));
    }

    @Override
    @Transactional
    public List<Attachment> getAllAttachmentsBySubject(long subjectId) {
        SubjectDetails s = subjectDetailsRepository.findById(subjectId).orElse(null);
        return attachmentRepository.findAllBySubjectDetails(s);
    }
}
