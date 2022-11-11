import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { API_KEY, IMAGE_BASE_URL } from "../../constants/constants";
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, seturlId] = useState('');
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
      });
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
        console.log(response.data)
        if(response.data.results.length !==0) seturlId(response.data.results[0].key)
        else console.log("Empty array")
     })
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, idx) => {
          return (
            <img
            onClick={() => handleMovie(obj.id)}
              key={idx}
              className={props.isSmall ? "small-poster" : "poster"}
              alt="poster"
              src={`${IMAGE_BASE_URL}${obj.poster_path}`}
            />
          );
        })}
      </div>
      {
        urlId && <YouTube videoId={urlId} opts={opts} />
      }
    </div>
  );
}

export default RowPost;
