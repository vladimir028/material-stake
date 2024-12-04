import { useState, useEffect } from "react";
import useAuthStatus from "./useAuthStatus";

const useTakenSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const {isLoggedIn, username} = useAuthStatus();

    useEffect(() => {
        console.log("username: " + username)
        const url = `http://localhost:8080/subjects/taken?username=${encodeURIComponent(username)}`;
        // const url = 'http://localhost:8080/subjects/taken';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Taken subjects by user: " + username)
                setSubjects(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [username]);

    return subjects;
}

export default useTakenSubjects;
