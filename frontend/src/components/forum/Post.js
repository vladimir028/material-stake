import React from "react";
import CommentsModal from "./modals/comments/CommentsModal";
import {BiUpvote} from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import Button from "react-bootstrap/Button";

// TODO: REFACTORING
const Post = ({post, updateVote, decreaseVote}) => {
    // Define a variable to hold the image URL
    const imageUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/man-5692600-4743369.png?f=webp"; // Assuming imageUrl is a property of the post object

    return (
        <div className="card mb-3" style={{backgroundColor: '#CDC1B6', position: 'relative'}}>
            <div className="card-body">
                <div style={{display: "flex", alignItems: "center"}}>
                    {imageUrl ? ( // Render the image if imageUrl exists
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginRight: "30px"
                        }}>
                            <img
                                src={post.author.avatarUrl ? post.author.avatarUrl  : imageUrl}
                                alt="Profile"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    border: "1px solid lightgray"
                                }}
                            />
                            {/* Add name below the picture */}
                            <p className="card-text">{post.author.username}</p>
                        </div>
                    ) : (
                        // If no imageUrl, render a red circle
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "50%",
                                backgroundColor: "red",
                                marginRight: "40px" // Add margin for spacing
                            }}
                        />
                    )}
                    <div>
                        <h2 className="card-title">{post.title}</h2>
                        <p className="card-text">{post.description}</p>
                        <div style={{display: 'flex', gap: '20px'}}>
                            <CommentsModal postId={post.id}></CommentsModal>
                            <Button
                                onClick={() => updateVote(post.id)}
                                variant="primary"
                                style={{
                                    backgroundColor: "transparent",  // White background
                                    color: "black",            // Black icon
                                    border: "none",            // No border
                                    display: "flex",           // Flex display to center the icon
                                    justifyContent: "center", // Center the icon horizontally
                                    alignItems: "center",    // Center the icon vertically
                                    outline: "none",                // No outline
                                    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)", // Add shadow effect
                                    padding: "10px",                // Optional: add padding for better appearance
                                    borderRadius: "30px"               // Optional: add border radius for rounded corners
                                }}>
                                <BiUpvote
                                    style={{fontSize: "20px"}}
                                />
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    marginLeft: "5px"
                                }}>
                                    <p style={{margin: 0}}>{post.upScore} Votes</p>
                                </div>
                            </Button>
                            <Button
                                onClick={() => decreaseVote(post.id)}
                                variant="primary"
                                style={{
                                    backgroundColor: "transparent",  // White background
                                    color: "black",            // Black icon
                                    border: "none",            // No border
                                    display: "flex",           // Flex display to center the icon
                                    justifyContent: "center", // Center the icon horizontally
                                    alignItems: "center",    // Center the icon vertically
                                    outline: "none",                // No outline
                                    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)", // Add shadow effect
                                    padding: "10px",                // Optional: add padding for better appearance
                                    borderRadius: "30px"                // Optional: add border radius for rounded corners
                                }}>
                                <BiDownvote
                                    style={{fontSize: "20px"}}
                                />
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    marginLeft: "5px"
                                }}>
                                    <p style={{margin: 0}}>{post.downScore} Votes</p>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                <p className="card-text" style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    margin: 0,
                    fontSize: '0.9em'
                }}>
                    <small className="text-muted">Posted: {
                        post.timeStamp.toString().split('T')[0] + " --  " +
                        post.timeStamp.toString().split('T')[1].split('.')[0]
                    }</small>
                </p>
            </div>
        </div>
    );
}

export default Post;
