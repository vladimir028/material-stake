const useSetSubject = () => {

    const handleSubmit = async (event, formData) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/subjects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Request successful, do something with the response
                console.log('POST request successful');
            } else {
                // Request failed
                console.error('POST request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return handleSubmit;
}

export default useSetSubject;