import React, {useEffect, useState} from 'react';
import Post from "./Post";
import AddPostModal from "./modals/post/AddPostModal";
import useGetSubject from "../../hooks/useGetSubject";
import Spinner from 'react-bootstrap/Spinner';
import {FaRegFrown} from 'react-icons/fa';
import classes from "../../materials-styling/materialsstyling.module.css"
import spinner_classes from "../Spinner.module.css"

const Forum = ({posts, subjectId, subjectUrl, updateVote, decreaseVote}) => {

    const {subject, fetchSubject} = useGetSubject();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchSubject(subjectUrl)
        if (!subject) {
            setIsLoading(false);
        }
    }, [])


    if (isLoading || !subject) {
        return (
            <div className={`container ${spinner_classes.modifiedSpinner}`}>
                <Spinner animation="border"/>
            </div>
        );
    }

    return (
        <div className={`container ${classes.containerCustomLoaded}`}>
            <h1 className="text-center mb-2 mt-3">Форум за „{subject.name}“</h1>
            <div className={`${classes.flexEnd}`}>
                <AddPostModal subjectId={subjectId}></AddPostModal>
            </div>
            {Object.entries(posts).length !== 0 ? Object.entries(posts).map(([postId, post]) => (
                <Post
                    updateVote = {updateVote}
                    decreaseVote = {decreaseVote}
                    key={postId} post={post}/>
            )) : <div className={classes.noPostsWrapper}>
                <FaRegFrown className={classes.noPostsIcon}/>
                <h1 className={classes.noPostsMessage}>Nothing has been posted</h1>
            </div>}
        </div>
    );
};

export default Forum;

