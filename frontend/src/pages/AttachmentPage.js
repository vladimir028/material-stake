import {urlParams} from "../enum/url";
import React, {useEffect} from "react";
import Navigation from "../components/navigation/Navigation";
import SidebarMaterials from "../components/sidebar/SidebarMaterials";
import useAttachmentFile from "../hooks/useAttachmentFile";
import AttachmentFile from "../components/materials/AttachementFile";

const AttachmentPage = () => {

    const {activeLink, attachmentFiles, fetchData} = useAttachmentFile();
    const subjectId =  window.location.pathname.substring(1).split("/").at(urlParams.SUBJECT_ID);

    useEffect(() => {
        fetchData(subjectId)
    }, [])

    return (
        <>
            <div style={{ backgroundColor: '#DBD2CB' }}>
                <Navigation
                    isNavigationWhite={false}
                />
            </div>
            <div style={{display: 'flex', minHeight: "100vh"}}>
                <SidebarMaterials/>
                <AttachmentFile
                    subjectUrl = {subjectId}
                    attachmentFiles={attachmentFiles} subjectId={activeLink}></AttachmentFile>
            </div>
        </>
    );
}

export default AttachmentPage;