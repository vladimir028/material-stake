import {useState} from "react";

const useSetPosts = () => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = async (event, username, props) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/posts/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    text,
                    username,
                    subjectId: props.subjectId
                })
            });

            if (response.ok){
                console.log('Created post successfully');
                props.onHide()
                window.location.href = `/materials/forum/${props.subjectId}`;
            }
            else
                console.error('Creating post failed');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return {title, setTitle, text, setText, handleSubmit}
}

export default useSetPosts;