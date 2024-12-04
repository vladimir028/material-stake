import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import {FaCommentDots} from "react-icons/fa";
import useComments from "../../../../hooks/useComments";
import classes from "../../../courses/CommentsModal.module.css"
import MyVerticallyCenteredModal from "./CenteredModalComments";

const CommentsModal = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const {comments, fetchData} = useComments();

    useEffect(() => {
        fetchData(props.postId);
    }, []);

    return (
        <>
            <Button
                variant="dark"
                onClick={() => setModalShow(true)}
                className={classes.buttonCustom}
               >
                <FaCommentDots style={{fontSize: "20px"}}/>
                <div className={classes.iconText}>
                    <p className={classes.noMargin}>{comments.length} Answers</p>
                </div>

            </Button>

            <MyVerticallyCenteredModal
                postId={props.postId}
                comments={comments}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default CommentsModal