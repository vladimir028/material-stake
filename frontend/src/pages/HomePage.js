import {Col, Container, Image, Row} from "react-bootstrap";
import Navigation from "../components/navigation/Navigation";
import {ReactTyped} from "react-typed";
import HomePageCard from "../components/home-page-card/HomePageCard";
import InformationCard from "../components/home-page-card/InformationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import Footer from "../components/footer/Footer";
import ReactCardFlip from 'react-card-flip';
import companies from '../data/companies.json'
import students_organizations from '../data/student_organizations.json'
import home_page_data from "../data/home_page.json"
import DescriptionCard from "../components/home-page-card/DescriptionCard";
import ComputerAnimation from "../components/animation/computer/ComputerAnimation";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ChooseSubject from "./ChooseSubject";

const HomePage = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "70px",
        slidesToShow: 4,
        swipeToSlide: true,
        speed: 500
    };

    const [companiesState, setCompaniesState] = useState(companies);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    })

    if (isLoading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <Spinner animation="border"/>
            </div>

        );
    }


    const flipCard = (id) => {
        const updatedCompanies = companiesState.map((company) =>
            company.id === id ? {...company, isFlipped: !company.isFlipped} : company
        );
        setCompaniesState(updatedCompanies);
    }

    return (
        <>
            <Navigation
                isNavigationWhite={true}
            />
            <Container>
                <Row className="d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
                    <Col>
                        <Row className="h-25 d-inline-block py-5">
                            <h1>
                                <b>
                                    Страница за{" "}
                                    <ReactTyped
                                        strings={["споделување", "коментари!", "дружба!"]}
                                        typeSpeed={100}
                                        loop
                                        backSpeed={20}
                                        cursorChar="|"
                                        showCursor={true}
                                    />
                                </b>
                            </h1>
                        </Row>
                        <Row className="h-25 d-inline-block mt-3">
                            <p>
                                Добредојдовте на нашиот форум! <br/>
                                Регистрирајте се денес и бидете дел од динамичната образовна заедница!
                            </p>
                        </Row>
                        <Row className="w-25 d-inline-block mt-3">
                            <Button variant="outline-dark" href="/register">Види повеќе</Button>
                        </Row>
                    </Col>
                    <Col>
                        <ComputerAnimation/>
                    </Col>
                </Row>
            </Container>
            <ChooseSubject/>
            <Container style={{minWidth: '100%', backgroundColor: '#DBD2CB'}}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Image
                            style={{width: '40%'}}
                            src="/images/homepage/40-removebg-preview.png"></Image>
                    </Row>
                    <Container
                        style={{textAlign: 'center', height: '250px', width: '1500px', backgroundColor: '#CDC1B6'}}>
                        <h2 style={{paddingTop:'20px'}}>Дел од нашите услуги</h2>
                    </Container>
                    <Row className="justify-content-md-center">
                        {home_page_data.map((data) => {
                            return (
                                <Col style={{textAlign: '-webkit-center', position: 'relative', bottom: '140px'}}>
                                    <HomePageCard
                                        imgUrl={data.imgPath}
                                        mainText={data.mainText}
                                        subText={data.subText}
                                    >
                                    </HomePageCard>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
                <Container>
                    <Row className="text-center">
                        <h2>Запознајте се со нашите студентски организации</h2>
                    </Row>
                    <br></br>
                    <Row>
                        {students_organizations.map((organization) => {
                            return (
                                <Col>
                                    <InformationCard
                                        isStudentOrganization={true}
                                        imgPath={organization.imgPath}
                                        organizationName={organization.organizationName}
                                        redirectLink={organization.link}
                                    ></InformationCard>
                                </Col>
                            );
                        })}
                    </Row>
                    <br></br>
                </Container>
                <br></br>
                <Row className="text-center">
                    <h2>Огласи за пракса</h2>
                </Row>
                <br></br>
                <Container style={{minWidth: '99%'}}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {companiesState.map((company) => {
                                return (
                                    <ReactCardFlip flipDirection='horizontal' isFlipped={company.isFlipped}>
                                        <div onClick={() => flipCard(company.id)}>
                                            <InformationCard
                                                isStudentOrganization={false}
                                                imgPath={company.imgPath}
                                                organizationName={company.organizationName}
                                            >
                                            </InformationCard>
                                        </div>
                                        <div onClick={() => flipCard(company.id)}>
                                            <DescriptionCard
                                                redirectLink={company.link}
                                                description={company.description}>
                                            </DescriptionCard>
                                        </div>
                                    </ReactCardFlip>
                                );
                            })}
                        </Slider>
                    </div>
                </Container>
                <Footer></Footer>
            </Container>

        </>
    );
}
export default HomePage;

