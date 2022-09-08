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
