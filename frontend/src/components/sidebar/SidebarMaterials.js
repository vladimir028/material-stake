import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import React, {useEffect} from "react";
import useTakenSubjects from "../../hooks/useTakenSubjects";
import classes from "./Sidebar.module.css"

const SidebarMaterials = () => {
    const subjects = useTakenSubjects();
    const redirectLinkForum = `/materials/forum/`
    const redirectLinkMaterials = `/materials/upload/`

    const handleClickForum = (subject) => {
        window.location.href = `${redirectLinkForum}${subject.id}`;
    }
    const handleClickMaterials = (subject) => {
        window.location.href = `${redirectLinkMaterials}${subject.id}`;
    }

    const groupSubjectsByAcademicYearAndSemester = () => {
        const groupedSubjects = Object.groupBy(subjects, ({academicYearAndSemester}) => academicYearAndSemester);
        console.log(Object.values(groupedSubjects))
        return groupedSubjects;
    }

    useEffect(() => {
        groupSubjectsByAcademicYearAndSemester();
    })

    return (
        <Sidebar>
            <Menu className={classes.sidebar}>
                {Object.values(subjects).map((subject) => {
                    return (
                        <SubMenu label={subject.name}>
                            <MenuItem className={classes.menuItem} onClick={() => handleClickMaterials(subject)}>Материјали
                            </MenuItem>
                            <MenuItem className={classes.menuItem} onClick={() => handleClickForum(subject)}>
                                Форум
                            </MenuItem>
                        </SubMenu>
                    );
                })}
            </Menu>
        </Sidebar>
    );
}

export default SidebarMaterials;