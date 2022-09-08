import React from 'react'
import { useEffect, useState } from 'react'
import ReviewLikes from './ReviewLikes'
import moment from 'moment'
import './Review.css'

function Reviews({ movieId, category }) {

    const [comment, setComment] = useState([])
    const [showComments, setShowComments] = useState(false)
    const [likes, setLikes] = useState(0)

    console.log(movieId)

    const getName = category.split("/").pop().slice(0, -9) + "_id"
    // debugger;
    console.log(getName)
    useEffect(() => {
        fetch(`http://localhost:9292${category}`)
            .then(resp => resp.json())
            .then(data => setComment(data))
        setShowComments(!showComments)
    }, [])
    // function handleReviews() {
    //     fetch(`http://localhost:9292${category}`)
    //         .then(resp => resp.json())
    //         .then(data => setComment(data))
    //     setShowComments(!showComments)
    // }
    console.log(comment)
