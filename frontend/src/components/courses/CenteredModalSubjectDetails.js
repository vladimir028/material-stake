import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

const MyVerticallyCenteredModal = (props) => {

    const handleClick = () => {
        props.onHide();
        props.setHover(false);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.subject['subjectTitle'].replace('\n', ' / ')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h4>Предуслови:</h4>
                    <h5>{props.subject['prerequisites'].length !== 0 ? props.subject['prerequisites'] : 'Нема'}</h5>
                </div>
                <div>
                    <h4>Професори:</h4>
                    <h5>{props.subject['teacher']}</h5>
                </div>
                <div>
                    <h4>Повеќе детали:
                    </h4>
                    <a target="_blank" href={props.subject['url']}>{props.subject['code']}</a>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClick}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;