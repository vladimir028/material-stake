import {Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar';
import classes from "./Sidebar.module.css"
import Button from "react-bootstrap/Button";
import {IoCalendarOutline} from "react-icons/io5";
import {MdOutlineBookmarks} from "react-icons/md";
import React from "react";

const SidebarSubjects = ({onSemesterClick, onAcademicYearClick, setSemester, setAcademicYear, setActiceSubject}) => {

    const academicYear = [1, 2, 3, 4];
    const semesters = ["Зимски", "Летен"]

    const handleClick = () => {
        setSemester(null);
        setAcademicYear(null);
        setActiceSubject(null);
    }

    const sidebarStyles = {
        position: 'sticky',
        top: 0,
        alignSelf: 'flex-start',
        height: '100vh',
        overflowY: 'auto',
        backgroundColor: '#DBD2CB',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    return (
        <Sidebar style={sidebarStyles} className={classes.stickySidebar}>
            <Menu className={classes.sidebar}>
                <SubMenu label="Семестар" icon={<MdOutlineBookmarks/>}>
                    {semesters.map((semester => (
                        <MenuItem className={classes.menuItem} key={semester}
                                  onClick={() => onSemesterClick(semester)}>{semester}</MenuItem>
                    )))}
                </SubMenu>
                <SubMenu label="Академска година" icon={<IoCalendarOutline/>}>
                    {academicYear.map((year => (
                        <MenuItem className={classes.menuItem} key={year}
                                  onClick={() => onAcademicYearClick(year)}>{year} година</MenuItem>
                    )))}
                </SubMenu>
                <MenuItem style={{backgroundColor: '#CDC1B6'}}>
                    <Button variant="outline-dark" onClick={handleClick}>Reset</Button>
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}

export default SidebarSubjects;