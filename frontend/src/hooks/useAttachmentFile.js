import {useState} from "react";

const useAttachmentFile = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [attachmentFiles, setAttachmentFiles] = useState([]);

    const fetchData = (subjectId) => {
        const url = 'http://localhost:8080/file/' + subjectId;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAttachmentFiles(data);
                console.log('fajlovite demek', data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        setActiveLink(subjectId); // Update active link
    };

    return {activeLink, attachmentFiles, fetchData};
}

export default useAttachmentFile;
