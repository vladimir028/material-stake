import React, {useEffect} from "react";
import Navigation from "../components/navigation/Navigation";
import Forum from "../components/forum/Forum";
import usePostsAndLink from "../hooks/usePostsAndLink";
import SidebarMaterials from "../components/sidebar/SidebarMaterials";
import {urlParams} from "../enum/url"
import useSetUpVote from "../hooks/votes/useSetUpVote";
import useSetDownVote from "../hooks/votes/useSetDownVote";


const ForumPage = () => {

    const {activeLink, posts, setPosts,  fetchData} = usePostsAndLink();
    const {updateVote} = useSetUpVote();
    const {decreaseVote} = useSetDownVote();
    const subjectId =  window.location.pathname.substring(1).split("/").at(urlParams.SUBJECT_ID);


    useEffect(() => {
        fetchData(subjectId)
    }, [])

    const handleUpdateVote = (id) => {
        updateVote(id, (updatedPost) => {
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === id ? { ...post, upScore: updatedPost.upScore } : post
                )
            );
        });
    };
    const handleDownVote = (id) => {
        decreaseVote(id, (updatedPost) => {
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === id ? { ...post, downScore: updatedPost.downScore } : post
                )
            );
        });
    };

    return (
        <>
            <div style={{ backgroundColor: '#DBD2CB' }}>
                <Navigation
                    isNavigationWhite={false}
                />
            </div>
            <div style={{display: 'flex', minHeight: "100vh"}}>
               <SidebarMaterials/>
                <Forum
                    updateVote = {handleUpdateVote}
                    decreaseVote = {handleDownVote}
                    subjectUrl = {subjectId}
                    posts={posts} subjectId={activeLink}/>
            </div>
        </>
    );
}

export default ForumPage;