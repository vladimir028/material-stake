import useAuthStatus from "../../../../hooks/useAuthStatus";
import useSetPosts from "../../../../hooks/useSetPosts";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

const MyVerticallyCenteredModal = (props) => {

    const { username } = useAuthStatus();
    const {setTitle, setText, handleSubmit} = useSetPosts();

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" className="font" centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додади нов пост!
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form>
                    <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Наслов</label>
                    <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} style={{
                        width: '100%',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '1rem',
                    }} /><br /><br />
                    <label htmlFor="text" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Опис</label>
                    <textarea id="text" name="text" rows="6" cols="50" onChange={(e) => setText(e.target.value)}  style={{
                        width: '100%',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '1rem',
                    }}></textarea><br /><br />

                    <button onClick={(event) => handleSubmit(event, username, props)}
                            style={{
                                padding: '0.75rem',
                                backgroundColor: '#814A35',
                                color: '#FFFADA',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#682A1E')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#814A35')}>Постави пост</button>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide} style={{
                    backgroundColor: '#814A35',
                    color: '#FFFADA',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s',
                }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#682A1E')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#814A35')}
                >
                    Затвори
                </Button>
            </Modal.Footer>

        </Modal>
    );
}
export default MyVerticallyCenteredModal;