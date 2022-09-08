import React, { useState } from 'react'

function Comments({ categoryComment, mov_id, handleAddComment }) {

    console.log(handleAddComment)
    const [newComment, setNewComment] = useState("")
    console.log(newComment)
    console.log(categoryComment);

    function handleSubmit(e) {
        // debugger;
        e.preventDefault();
        fetch(`http://localhost:9292/${categoryComment}`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                comment: newComment,
                likes: 0,
                mov_id: mov_id
            })
        }).then(resp => resp.json())
            .then(addcomment => {
                handleAddComment(addcomment)
                console.log(addcomment)
                e.target.reset();
            })
        setNewComment(" ");
    }