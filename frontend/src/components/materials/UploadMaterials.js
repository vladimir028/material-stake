import {useState} from "react";
import useSetMaterials from "../../hooks/useSetMaterials";

const UploadMaterials = () => {
    const {
        file,
        setFile,
        response,
        setResponse,
        description,
        setDescription,
        subjectId,
        setSubjectId,
        handleSubmit,
        handleFileChange,
        handleDescription,
        handleSubject
    } = useSetMaterials();

    return (
        <div>
            <h2>Upload a File</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event) => handleDescription(event)}/>
                <input type="text" onChange={handleSubject}/>
                <input type="file" onChange={handleFileChange}/>
                <button type="submit">Upload</button>
            </form>
            {response && (
                <div>
                    <h3>Upload Success</h3>
                    <p>File Name: {response.fileName}</p>
                    <p>Download URL: <a href={response.downloadURL}>{response.downloadURL}</a></p>
                    <p>File Type: {response.fileType}</p>
                    <p>File Size: {response.fileSize} bytes</p>
                    <p>Description {response.description}</p>
                </div>
            )}
        </div>
    );
}

export default UploadMaterials;