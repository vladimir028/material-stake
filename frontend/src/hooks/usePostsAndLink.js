import {useState} from "react";

const usePostsAndLink = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [posts, setPosts] = useState([]);

    const fetchData = (id) => {
        const url = 'http://localhost:8080/posts/' + id;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPosts(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        setActiveLink(id); // Update active link
    };

    return {activeLink, posts, setPosts, fetchData};
}

export default usePostsAndLink;