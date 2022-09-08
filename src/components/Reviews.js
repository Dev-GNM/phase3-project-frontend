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

    let commentFilter
    if (getName === "netflix_original_id") { commentFilter = comment.filter(x => x.netflix_original_id === movieId) }
    else if (getName === "trending_id") { commentFilter = comment.filter(x => x.trending_id === movieId) }
    else if (getName === "romance_id") { commentFilter = comment.filter(x => x.romance_id === movieId) }
    else if (getName === "top_rated_id") { commentFilter = comment.filter(x => x.top_rated_id === movieId) }
    else if (getName === "action_id") { commentFilter = comment.filter(x => x.action_id === movieId) }
    else if (getName === "horror_id") { commentFilter = comment.filter(x => x.horror_id === movieId) }
    else if (getName === "documentary_id") { commentFilter = comment.filter(x => x.documentary_id === movieId) }
    else if (getName === "comedy_id") { commentFilter = comment.filter(x => x.comedy_id === movieId) }
    // debugger
