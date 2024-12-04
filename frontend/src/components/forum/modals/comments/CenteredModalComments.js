import useAuthStatus from "../../../../hooks/useAuthStatus";
import useSetComments from "../../../../hooks/useSetComments";
import {urlParams} from "../../../../enum/url";
import Modal from "react-bootstrap/Modal";
import classes from "../../../courses/CommentsModal.module.css";
import Button from "react-bootstrap/Button";
import React from "react";

const MyVerticallyCenteredModal = (props) => {
    const {username} = useAuthStatus();
    const {setComment, handleSubmit} = useSetComments();
    const subjectId = window.location.pathname.substring(1).split("/").at(urlParams.SUBJECT_ID)

    console.log("subjectID", subjectId);

    console.log(props.comments)

    const imageUrl = ''

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="font"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Коментари
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {Object.entries(props.comments).map(([commentId, comment]) => (

                    <div key={commentId} className={`card mb-3 ${classes.cardCustom}`}>
                        <div className="card" style={{backgroundColor: '#e3e2df', position: 'relative'}}>
                            <div className="card-body">
                                <div style={{display: "flex", alignItems: "center"}}>
                                    {comment.author.avatarUrl ? ( // Render the image if imageUrl exists
                                        <div>
                                            <img
                                                src={comment.author.avatarUrl ? comment.author.avatarUrl : imageUrl}
                                                alt="Profile"
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "50%",
                                                    border: "0.5px solid lightgrey",
                                                    marginRight: "10px"
                                                }}
                                            />
                                            <p style={{
                                                position: 'absolute',
                                                bottom: '3px',
                                                left: '30px',
                                                margin: 0,
                                                fontSize: '.9em'
                                            }} className="card-text">{comment.author.username}</p>
                                        </div>
                                    ) : (
                                        // If no imageUrl, render a red circle
                                        <div
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                border: "0.5px solid lightgrey",
                                                marginRight: "10px"
                                            }}>
                                            <p style={{
                                                position: 'absolute',
                                                bottom: '3px',
                                                left: '30px',
                                                margin: 0,
                                                fontSize: '.9em'
                                            }} className="card-text">{comment.author.username}</p>
                                        </div>

                                    )}
                                    <div>
                                        <h6 className="card-text">{comment.text}</h6>
                                    </div>
                                </div>
                                <p className="card-text" style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '10px',
                                    margin: 0,
                                    fontSize: '0.8em'
                                }}>
                                    <small className="text-muted">Posted: {
                                        comment.timeStamp.toString().split('T')[0] + " --  " +
                                        comment.timeStamp.toString().split('T')[1].split('.')[0]
                                    }</small>
                                </p>
                            </div>
                        </div>
                    </div>

                ))}
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    className={classes.textareaCustom}/>
                <div className={classes.flexStart}>
                    <Button
                        onClick={(event) => handleSubmit(event, username, props, subjectId)}
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
                        Додади коментар!
                    </Button>
                </div>
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

export default MyVerticallyCenteredModal