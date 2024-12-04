import Container from 'react-bootstrap/Container';
import {useNavigate} from 'react-router-dom';
import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Navigation.module.css'
import useAuthStatus from "../../hooks/useAuthStatus";


const Navigation = ({isNavigationWhite}) => {
    const {isLoggedIn, username, user} = useAuthStatus();
    console.log(user)
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    const handleMouseOver = (event) => {
        // event.target.classList.add(classes.customButton);
        event.target.style.color = '#FFFFFF';
        event.target.style.backgroundColor = '#814A35';
        event.target.style.borderRadius = '40em';
    };

    const handleMouseOut = (event) => {
        // event.target.classList.remove(classes.customButton);
        // if (isNavigationWhite) {
        //     event.target.classList.add(classes.customButtonWhite);
        // } else {
        //     event.target.classList.add(classes.customButton);
        // }
        event.target.style.color = '#818181';
        event.target.style.backgroundColor = isNavigationWhite ? '#FFFFFF' : '#DBD2CB'
    };

    return (
        <Navbar expand="lg">
            <Container>
                <div id="logo" className="d-flex"
                     style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', border: '1px solid lightgray', padding: '3px 15px', borderRadius: '20px'}}>
                    <h3 style={{marginRight: '5px', marginBottom:'0px', color:'black'}}>FINKI</h3>
                    <img
                        alt='/'
                        src='/images/finkilogo.png'
                        style={{
                            borderRadius: '50%',
                            border: '2px solid lightgrey',
                            width: '40px',
                            objectFit: 'cover',
                            margin: '0',
                            cursor: 'pointer'
                        }}
                        onClick={routeChange}
                    />
                    <h3 style={{marginLeft: '5px', marginBottom:'0px', color:'black'}}>SHARE</h3>
                </div>

                <Navbar.Brand href="/" className={classes.navbarBrand}>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={classes.navbarNav}>
                        <Nav.Link
                            className={isNavigationWhite ? classes.customButtonWhite : classes.customButton}
                            href="/subjects"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            Избери предмет
                        </Nav.Link>
                        <Nav.Link
                            className={isNavigationWhite ? classes.customButtonWhite : classes.customButton}
                            href="/materials"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            Материјали
                        </Nav.Link>
                        <Nav.Link
                            className={isNavigationWhite ? classes.customButtonWhite : classes.customButton}
                            href="/register"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            Регистрирај се
                        </Nav.Link>

                        {isLoggedIn ?
                            (<Nav.Link href="http://localhost:8080/logout"
                                       className={isNavigationWhite ? classes.customButtonWhite : classes.customButton}>
                                Одјави се
                                <img style={{borderRadius: "15px", marginLeft: "10px"}} width="30px"
                                     src={user.avatarUrl} alt="slika.jpg"/>
                            </Nav.Link>)
                            :
                            (<Nav.Link href="/login"
                                       className={isNavigationWhite ? classes.customButtonWhite : classes.customButton}
                                       onMouseOver={handleMouseOver}
                                       onMouseOut={handleMouseOut}>Најави се</Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;