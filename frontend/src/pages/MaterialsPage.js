import '../App.css';
import React, {useEffect, useState} from "react";
import useTakenSubjects from "../hooks/useTakenSubjects";
import Navigation from "../components/navigation/Navigation";
import SidebarMaterials from "../components/sidebar/SidebarMaterials";
import {FaBookOpen} from 'react-icons/fa';
import classes from './MaterialsPage.module.css';
import Spinner from "react-bootstrap/Spinner";
import useAuthStatus from "../hooks/useAuthStatus";

const MaterialsPage = () => {
    // const [isLoggedIn, username] = useAuthStatus()
    const subjects = useTakenSubjects();
    const hasSubjects = Object.values(subjects).length > 0;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
        // if (subjects !== null) {
        //     setIsLoading(false);
        // }
    }, [])

    if(isLoading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <Spinner animation="border" />
            </div>
        );
    }

    return (
        <>
            <div style={{ backgroundColor: '#DBD2CB' }}>
                <Navigation
                    isNavigationWhite={false}
                />
            </div>
            <div
                className={classes.materialsPageContainer}>
                <SidebarMaterials/>
                <div className={classes.introContainer}>
                    <FaBookOpen size={50} color="#814A35"/>
                    <h1>{hasSubjects ? `Добредојдовте на страницата за материјали` : `Ве молиме изберете предмети`}</h1>
                    <p>{hasSubjects ? "Прегледајте ги материјалите за вашите предмети од менито и започнете со учење!" : "Изберете предмети за да започнете со прегледување на материјалите."}</p>
                </div>
            </div>
        </>
    );
}

export default MaterialsPage;
