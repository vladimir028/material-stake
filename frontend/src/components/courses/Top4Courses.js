import CardComponent from "./CardComponent"
import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import useSubjects from "../../hooks/useSubjects";
import Spinner from "react-bootstrap/Spinner";


const Top4Courses = ({category}) => {
    const subjects = useSubjects();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [])

    if(isLoading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                height: "100vh"
            }}>
                <Spinner animation="border" />
            </div>
        );
    }

    return (
        <Container className="mt-5">
                <Row>
                {Object.values(subjects)
                .filter(item => category.some(cat => item["subjectTitle"].includes(cat)))
                .slice(0,4)
                .map(item => (
                    <Col key={item.url} xs={12} sm={6} md={4} lg={3}>
                        <CardComponent
                            subject={item}
                        />
                    </Col>
                ))}
            </Row>
                </Container>
    );
}
export default Top4Courses;