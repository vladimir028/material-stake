import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import CenteredModal from "./CenteredModal";

const AddMaterialsModal = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button className="mb-2" variant="link" onClick={() => setModalShow(true)}>
                Нов материјал
            </Button>
            <CenteredModal
                subjectId={props.subjectId}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default AddMaterialsModal;