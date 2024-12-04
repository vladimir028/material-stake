import {useState} from "react";

const useRegisterUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    image: selectedImage
                })
            });

            console.log(response.text())
            if (response.ok){
                console.log('Created account successfully');
                setSuccessMessage('Account created successfully!'); // Set success message
                setUsername(''); // Clear form fields
                setEmail('');
                setPassword('');
                setSelectedImage('');
            }
            else
                console.error('Creating account failed');

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return {username, setUsername, email, setEmail, password, setPassword, successMessage,
        setSuccessMessage, selectedImage, setSelectedImage,
        handleSubmit}
}

export default useRegisterUser;