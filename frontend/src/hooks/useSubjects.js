import {useEffect, useState} from "react";

const useSubjects = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8080/subjects';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setSubjects(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return subjects;
}

export default useSubjects;