const useSetDownVote = () => {

    const decreaseVote = (id, onSuccess) => {
        const url = `http://localhost:8080/posts/${id}/decrease_score`
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data)
                if (onSuccess) {
                    onSuccess(data); // Call the success callback with the new data
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return {decreaseVote}
}

export default useSetDownVote;
