import { API_KEY } from "./constants/constants";

export  const netfilx_orginals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export  const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const family_entertainment = `discover/movie?api_key=${API_KEY}&with_genres=10751&page=1`
export const top_rated = `movie/top_rated?api_key=${API_KEY}&with_genres=10751&page=1`
export const top_show = `trending/tv/week?api_key=${API_KEY}&page=1`
export const upcoming_movie =  `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`