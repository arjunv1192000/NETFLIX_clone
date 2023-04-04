import { API_KEY } from "./constants/constants"

export const Originals=`discover/tv?api_key=${API_KEY}&with_networks=213`

export const actions=`discover/movie?api_key=${API_KEY}&with_genres=28`

export const ComedyMovies=`discover/movie?api_key=${API_KEY}&with_genres=35`

export const RomanceMovies=`discover/movie?api_key=${API_KEY}&with_genres=10749`

export const HorrorMovies=`discover/movie?api_key=${API_KEY}&with_genres=27`

export const trending=`trending/all/week?api_key=${API_KEY}&language=en-US`