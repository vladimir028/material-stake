import {useState} from "react";

const useComments = () => {

    const [comments, setComments] = useState([]);

    const fetchData = (id) => {
        const url = 'http://localhost:8080/comments/' + id;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setComments(data);
                // console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return {comments, fetchData};
}

export default useComments;