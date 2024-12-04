import useAuthStatus from "../../../hooks/useAuthStatus";
import useSetMaterials from "../../../hooks/useSetMaterials";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, {useEffect} from "react";
import "./Materials.module.css"

const CenteredModal = (props) => {
    const { username } = useAuthStatus();
    useEffect(() => {
        console.log('subjectId', props.subjectId)
    })
    const {
        handleSubmit,
        handleFileChange,
        handleDescription,
    } = useSetMaterials();

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" className="font" centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додади нов материјал!
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={(event) => handleSubmit(event, props, username)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Опис</label>
                        <textarea
                            id="description"
                            onChange={(event) => handleDescription(event)}
                            style={{
                                width: '100%',
                                padding: '0.5rem',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                fontSize: '1rem',
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="file-upload" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Одбери материјал кој што сакаш да го поставиш</label>
                        <input
                            type="file"
                            id="file-upload"
                            onChange={handleFileChange}
                            style={{
                                width: '100%',
                                padding: '0.5rem',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                fontSize: '1rem',
                            }}
                        />
                    </div>
                    <Button
                        type="submit"
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
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#814A35')}
                    >
                        Постави материјал!
                    </Button>
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

export default CenteredModal;