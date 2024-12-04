import {Container, Row} from "react-bootstrap";
import Navigation from "../components/navigation/Navigation";
import SidebarSubjects from "../components/sidebar/SidebarSubjects";
import AllCoursesCard from "../components/courses/AllCoursesCard";
import React, {useState} from "react";
import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";
import useSubjects from "../hooks/useSubjects";

const AllSubjects = () => {

    const [semester, setSemester] = useState(null);
    const [academicYear, setAcademicYear] = useState(null);
    const [activeSubject, setActiveSubject] = useState(null);
    const subjects = useSubjects();


    const handleSemesterChange = (periodType) => {
        setSemester(periodType);
    }

    const handleAcademicYearChange = (termType) => {
        setAcademicYear(termType);
    }

    const checkTermAndPeriod = (semester, academicYear) => {
        if (semester == null && academicYear != null) {
            return <h1>Предмети од {academicYear} година</h1>;
        } else if (semester != null && academicYear == null) {
            return <h1>Предмети од {semester} семестар</h1>;
        } else if (semester != null && academicYear != null) {
            return <h1>Предмети од {academicYear} година/ {semester}</h1>
        }
    }

    const handleChange = (newValue) => {
        console.log("nova vrednost", newValue);
        setActiveSubject(newValue);
    }

    const handleTextField = (event) => {
        console.log(event.target.value)
    }

    return (
        <>
            <div style={{backgroundColor: '#DBD2CB'}}>
                <Navigation
                    isNavigationWhite={false}
                />
                <div style={{display: 'flex', minHeight: "100vh"}}>
                    <SidebarSubjects
                        setSemester={setSemester}
                        setAcademicYear={setAcademicYear}
                        setActiceSubject={setActiveSubject}
                        onSemesterClick={handleSemesterChange}
                        onAcademicYearClick={handleAcademicYearChange}
                    />
                    <Container className="mt-3">
                        <Autocomplete
                            value={activeSubject}
                            onChange={(_event, newValue) => handleChange(newValue)}
                            getOptionLabel={(option) => option.name}
                            getOptionKey={(option) => option.id}
                            options={Object.values(subjects)}
                            size="small"
                            renderInput={(params) => (
                                <TextField
                                    onChange={(event) => handleTextField(event)}
                                    {...params}
                                    label="Најди предмет"
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: <div>{params.InputProps.endAdornment}</div>,
                                    }}
                                />
                            )}
                        />
                        <Row className="text-center mt-4">
                            <h1>{(semester == null && academicYear == null) || activeSubject ? `Сите предмети` : checkTermAndPeriod(semester, academicYear)}</h1>
                        </Row>
                        <AllCoursesCard
                            activeSubject={activeSubject}
                            semester={semester}
                            academicYear={academicYear}
                        />
                    </Container>
                </div>
            </div>
        </>
    );
}
export default AllSubjects;