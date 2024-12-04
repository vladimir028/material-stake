import {useState} from "react";

const useGetSubject = () => {
    const [subject, setSubject] = useState(null);

    const fetchSubject = (id) => {
        const url = `http://localhost:8080/subject/get/${id}`
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setSubject(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return {subject, setSubject, fetchSubject}
}

export default useGetSubject;