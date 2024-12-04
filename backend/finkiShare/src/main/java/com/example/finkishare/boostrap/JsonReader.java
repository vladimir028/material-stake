package com.example.finkishare.boostrap;

import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.repository.SubjectDetailsRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class JsonReader {

    private final ResourceLoader resourceLoader;
    private  final SubjectDetailsRepository subjectDetailsRepository;

    @Autowired
    public JsonReader(ResourceLoader resourceLoader, List<SubjectDetails> subjectDetailsList, SubjectDetailsRepository subjectDetailsRepository) {
        this.resourceLoader = resourceLoader;
        this.subjectDetailsRepository = subjectDetailsRepository;
    }

    public List<SubjectDetails> readAndSaveJson(String filePath) {
        try {
            Resource resource = resourceLoader.getResource("classpath:" + filePath);
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(resource.getInputStream());

            List<SubjectDetails> subjectDetailsList = new ArrayList<>();
            for (JsonNode node : rootNode) {
                subjectDetailsList.add(new SubjectDetails(node));
            }
            return subjectDetailsList;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
