import React, { useState, useEffect } from 'react'
import Reviews from './Reviews';
import './Review.css'

function MovieDetails({ category }) {
    console.log(category)

    const getPath = window.location.pathname
    const getPathId = parseInt(getPath.split("/").pop())


    // debugger
    console.log(getPath)
    const [getMovie, setGetMovie] = useState([])
    // console.log(window.location.pathname)
    useEffect(() => {
        fetch(`http://localhost:9292${getPath}`)
            .then(resp => resp.json())
            .then(data => setGetMovie(data))
    }, [])