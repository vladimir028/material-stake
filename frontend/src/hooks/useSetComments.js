import {useState} from "react";

const useSetComments = () => {
    const [comment, setComment] = useState("")

    const handleSubmit = async (event, username, props, subjectId) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/comments/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    comment,
                    postId: props.postId,
                    username
                })
            });

            console.log(response.text())
            if (response.ok){
                console.log('Created post successfully');
                props.onHide()
                window.location.href = `/materials/forum/${subjectId}`;
            }
            else
                console.error('Creating post failed');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return {comment, setComment, handleSubmit}
}

export default useSetComments;