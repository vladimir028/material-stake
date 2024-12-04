package com.example.finkishare.model;

import com.fasterxml.jackson.databind.JsonNode;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class SubjectDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 1000)
    private String name;

    @Column(length = 1000)
    private String url;

    @Column(length = 1000)
    private String subjectTitle;

    @Column(length = 1000)
    private String code;

    @Column(length = 1000)
    private String studyProgram;

    @Column(length = 1000)
    private String organizer;

    @Column(length = 1000)
    private String degree;

    @Column(length = 1000)
    private String academicYearAndSemester;

    @Column(length = 1000)
    private String teacher;

    @Column(length = 1000)
    private String prerequisites;

    @Column(length = 10000)
    private String content;

    @Column(length = 1000)
    private String learningMethods;

    @Column(length = 1000)
    private String timeDistribution;

    @Column(length = 1000)
    private String teachingActivities;

//    private Map<String, String> assessmentMethods;
//    private Map<String, String> assessmentCriteria;

    @Column(length = 1000)
    private String signatureRequirement;

    @Column(length = 1000)
    private String language;

    @Column(length = 1000)
    private String qualityMonitoringMethod;

    private Boolean isTaken;

    public SubjectDetails() {
    }

    public SubjectDetails(JsonNode node) {
        this.name = node.get("name").asText();
        this.url = node.get("url").asText();
        this.subjectTitle = node.get("Наслов на наставниот предмет").asText();
        this.code = node.get("Код").asText();
        this.studyProgram = node.get("Студиска програма").asText();

        this.organizer = node.get("Организатор на студиската програма (единица, односно институт, катедра, оддел)").asText();
        this.degree = node.get("Степен (прв, втор, трет циклус)").asText();
        this.academicYearAndSemester = node.get("Академска година/семестар").asText();
        this.teacher = node.get("Наставник").asText();
        this.prerequisites = node.get("Предуслови за запишување на предметот").asText();
        this.content = node.get("Содржина на предметната програма:").asText();
        this.learningMethods = node.get("Методи на учење:").asText();
        this.timeDistribution = node.get("Распределба на расположивото време").asText();
        this.teachingActivities = node.get("Форми на наставните активности").asText();
//        this.assessmentMethods = node.get("Начин на оценување").asText();
//        this.assessmentCriteria = node.get("Критериуми за оценување").asText();
        this.signatureRequirement = node.get("Услов за потпис и полагање на завршен испит").asText();
        this.language = node.get("Јазик на кој се изведува наставата").asText();
        this.qualityMonitoringMethod = node.get("Метод на следење на квалитетот на наставата").asText();
        this.isTaken = false;
    }
}
