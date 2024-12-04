import {useState} from "react";

const useSetUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            console.log(response.text())
            if (response.ok){
                console.log('Login successful');
                setIsLoggedIn(true)
            }
            else
                console.error('Login failed');

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return {username, setUsername, password, setPassword, isLoggedIn, handleSubmit}
}

export default useSetUser;