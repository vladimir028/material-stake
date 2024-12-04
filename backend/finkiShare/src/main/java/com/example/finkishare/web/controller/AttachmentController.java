package com.example.finkishare.web.controller;

import com.example.finkishare.model.Attachment;
import com.example.finkishare.model.dto.ResponseData;
import com.example.finkishare.service.AttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/file")
public class AttachmentController {
    private final AttachmentService attachmentService;

    @PostMapping("/upload")
    public ResponseData uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("description") String description,  @RequestParam("subjectId") String subjectId, @RequestParam("username") String username) throws Exception {
        Attachment attachment = null;
        String downloadURl = "";
        System.out.println(description);
        System.out.println(subjectId);
        attachment = attachmentService.saveAttachment(file, description, Long.parseLong(subjectId), username);
        downloadURl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/file/download/")
                .path(attachment.getId())
                .toUriString();

        return new ResponseData(attachment.getFileName(),
                downloadURl,
                file.getContentType(),
                file.getSize(),
                description);
    }

    @GetMapping("/download/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileId) throws Exception {
        Attachment attachment = null;
        attachment = attachmentService.getAttachment(fileId);
        return  ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(attachment.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + attachment.getFileName()
                                + "\"")
                .body(new ByteArrayResource(attachment.getData()));
    }

    @GetMapping("/{subjectId}")
    public List<Attachment> getAllAttachmentsBySubject(@PathVariable String subjectId) {
        return attachmentService.getAllAttachmentsBySubject(Long.parseLong(subjectId));
    }


}
