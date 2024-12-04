import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import classes from "./Footer.module.css"

const Footer = () => {
    const handleHover = (event) => {
        event.target.classList.add("icon-hover")
    }

    const handleHoverEnd = (event) => {
        event.target.classList.remove("icon-hover")
    }

    return (
        <>
            <Row className="gx-0 mt-5">
                <Col className="">
                    <hr
                        className={`${classes.hrCustom} ms-7`}
                    />
                </Col>
                <Col className="col-auto">
                    <Row className="mx-auto">
                        <Col className="col-auto">
                            <FaFacebook onMouseOver={handleHover}
                                        onMouseOut={handleHoverEnd}
                                        className={classes.icon}
                                        color="white"
                                        size="3.5em"
                                        onClick={() => window.location = "https://www.facebook.com/"}/>
                        </Col>
                        <Col className="col-auto">
                            <FaInstagram onMouseOver={handleHover}
                                         onMouseOut={handleHoverEnd}
                                         className={classes.icon}
                                         color="white"
                                         size="3.5em"/>
                        </Col>
                        <Col className="col-auto">
                            <AiFillTwitterCircle onMouseOver={handleHover}
                                                 onMouseOut={handleHoverEnd}
                                                 className={classes.icon}
                                                 color="white"
                                                 size="3.5em"/>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <hr
                        className={`${classes.hrCustom} me-7`}
                    />
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h1
                        className={classes.footerTitle}
                    >
                        FINKI<br></br>Share
                    </h1>
                </Col>
                <Col>
                    <h1
                        className={classes.footerTitle}
                    >
                        Links
                    </h1>
                    <br></br>
                    <Container className={`${classes.footerLinks} mx-auto w-50`}>
                        <h5>LeetCode</h5>
                        <h5>GitHub</h5>
                        <h5>FINKI</h5>
                        <h5>Discord</h5>
                    </Container>
                </Col>

                <Col>
                    <Container className={`${classes.footerAbout} mx-auto w-50`}>
                        <h5>ABOUT US</h5>
                        <h5>REPORT A BUG</h5>
                    </Container>
                </Col>
            </Row>
        </>
    );
};

export default Footer;
