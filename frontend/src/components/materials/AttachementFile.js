import useGetSubject from "../../hooks/useGetSubject";
import React, {useEffect, useState} from "react";
import spinner_classes from "../Spinner.module.css";
import Spinner from "react-bootstrap/Spinner";
import classes from "../../materials-styling/materialsstyling.module.css"
import AddMaterialsModal from "./modals/AddMaterialsModal";
import {FaRegFrown} from "react-icons/fa";
import File from "./File";
import {attachmentDetails} from "../../enum/attachmentDetails"

const AttachmentFile = ({attachmentFiles, subjectUrl, subjectId}) => {
    const {subject, fetchSubject} = useGetSubject();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchSubject(subjectUrl)
        if (!subject) {
            setIsLoading(false);
        }
        console.log('site fajlovi', attachmentFiles);
    }, [])


    if (isLoading || !subject) {
        return (
            <div className={`container ${spinner_classes.modifiedSpinner}`}>
                <Spinner animation="border"/>
            </div>
        );
    }
    return (
        <div className={`container ${classes.containerCustomLoaded}`}>
            <h1 className="text-center mb-2 mt-3">Материјали за „{subject.name}“</h1>
            <div className={`${classes.flexEnd}`}>
                <AddMaterialsModal subjectId={subjectId}></AddMaterialsModal>
            </div>
            {Object.entries(attachmentFiles).length !== 0 ? Object.entries(attachmentFiles).map((attachmentFile) => (
                <File attachmentFile={attachmentFile[attachmentDetails.ATTACHMENT_OBJECT]}></File>
                )) :
                <div className={classes.noPostsWrapper}>
                <FaRegFrown className={classes.noPostsIcon}/>
                <h1 className={classes.noPostsMessage}>Nothing has been posted</h1>
                </div>}
        </div>
    );
}

export default AttachmentFile;