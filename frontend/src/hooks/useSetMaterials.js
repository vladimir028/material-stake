import {useState} from "react";

const useSetMaterials = () => {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [description, setDescription] = useState("")
    const [subjectId, setSubjectId] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleDescription = (event) => {
        setDescription(event.target.value);
        console.log(event.target.value)
    }
    const handleSubject = (id) => {
        console.log(id)
        setSubjectId(id);
    }

    const handleSubmit = async (event, props, username) => {
        event.preventDefault();
        console.log('ova e vo submit', props.subjectId)
        setSubjectId(props.subjectId);

        if (!file) {
            alert("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("description", description);
        formData.append("subjectId", props.subjectId);
        formData.append("username", username)
        console.log('proverka dali se dodava id', props.subjectId);

        try {
            const response = await fetch('http://localhost:8080/file/upload', {
                method: 'POST',
                body:
                formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setResponse(data);

            } else {
                console.error("Upload failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
        props.onHide();
        window.location.href = `/materials/upload/${props.subjectId}`;
    };

    return {file, setFile, response, setResponse, description, setDescription, subjectId, setSubjectId, handleSubmit, handleFileChange, handleDescription, handleSubject}
}

export default useSetMaterials;