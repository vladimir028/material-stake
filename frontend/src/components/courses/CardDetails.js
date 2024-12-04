import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import MyVerticallyCenteredModal from "./CenteredModalSubjectDetails";

const CardDetails = (props) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button
                variant='primary'
                onClick={() => setModalShow(true)}
            >
                Детали
            </Button>

            <MyVerticallyCenteredModal
                subject={props.subject}
                show={modalShow}
                setHover={props.setHover}
                isModalActive={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default CardDetails;