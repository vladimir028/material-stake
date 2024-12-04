import CardComponent from "./CardComponent"
import React from "react";
import {Col, Row} from "react-bootstrap";
import useSubjects from "../../hooks/useSubjects";
import useTakenSubjects from "../../hooks/useTakenSubjects";

const filterByAcademicYearAndSemester = (subject, semester, academicYear) => {
    if (semester != null && academicYear != null) {
        return subject.academicYearAndSemester.includes(semester) && subject.academicYearAndSemester.includes(academicYear);
    }
    if (semester != null) {
        return subject.academicYearAndSemester.includes(semester);
    }
    if (academicYear != null) {
        return subject.academicYearAndSemester.includes(academicYear);
    }

    return true;
};

const AllCoursesCard = ({semester, academicYear, activeSubject}) => {
    const subjects = useSubjects();
    const activeSubjects = useTakenSubjects();

    console.log("active s: ")
    console.log(activeSubjects)

    const isSubjectActive = (subject) => activeSubjects.some(activeSubject => activeSubject.id === subject.id);

    return (
        <Row>
            {Object.values(subjects)
                .filter(!activeSubject ? subject => filterByAcademicYearAndSemester(subject, semester, academicYear) : subject => subject.id === activeSubject.id)
                .map(subject => (
                    <Col key={subject.url} xs={12} sm={6} md={4} lg={3}>
                        <CardComponent
                            active = {isSubjectActive(subject)}
                            subject={subject}
                        />
                    </Col>
                ))}
        </Row>
    );
}

export default AllCoursesCard;