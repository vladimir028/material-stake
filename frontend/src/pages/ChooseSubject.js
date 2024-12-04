import {Col, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import Top4Courses from "../components/courses/Top4Courses";
import subjects from "../data/filtering_subjects.json"

const ChooseSubject = () => {

    const [category, setCategory] = useState([subjects[0].description]);
    const [subjectObject, setSubjectObject] = useState(subjects);

    const handleActiveCategory = (category) => {
        const updatedSubjects = subjectObject.map((subject) => {
            return {
                ...subject,
                selected: subject.description.includes(category[0])
            };
        })

        setSubjectObject(updatedSubjects);
        setCategory(category);
    }

    return (
        <>
            <div style={{backgroundColor: '#DBD2CB'}}>
                <Container className="text-center mt-5">
                    <Row>
                        <h1 style={{marginTop: '50px'}}>Популарни курсеви од одредени области</h1>
                    </Row>
                </Container>
                <Container className="mt-5">
                    <Row className="text-center">
                        {subjectObject.map((subject) => {
                            return (
                                <Col>
                                    <p key={subject.id}
                                       onClick={() => handleActiveCategory(subject.category)} className="btn"
                                       style={{
                                           borderBottom: subject.selected ? '10px solid #814A35' : ''
                                       }}
                                    >{subject.title}</p>
                                </Col>
                            );
                        })}
                    </Row>
                    <hr style={{border: '1px solid black'}}></hr>
                </Container>
                <Container>
                    <Row>
                        <Top4Courses
                            category={category}
                        />
                    </Row>
                    <Row className="mt-5 text-center" style={{placeContent: 'center'}}>
                        <a href="/subjects" className="btn w-25">Види повеќе</a>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default ChooseSubject;