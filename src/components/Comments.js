import React, { useState } from 'react'

function Comments({ categoryComment, mov_id, handleAddComment }) {

    console.log(handleAddComment)
    const [newComment, setNewComment] = useState("")
    console.log(newComment)
    console.log(categoryComment);