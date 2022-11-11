import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY, IMAGE_BASE_URL } from '../../constants/constants'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
        setMovie(response.data.results[0])
      })
    }, [])
    
    return (
        <div 
         className='banner' style={{backgroundImage : movie? `url(${IMAGE_BASE_URL}${movie.backdrop_path})` : ""}}>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : "Name Unavailable"}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : "Overview Unavailable"}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner