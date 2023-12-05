import axios from "axios";
import { useEffect, useState } from 'react'
import { API_KEY } from "../constants/secrets";
import { BASE_URL } from "../constants";

function useFetchGenre()
{
   const [genres, setGenres] = useState([])
   useEffect(()=>{
    axios.get(`${BASE_URL}/3/genre/movie/list?language=en&api_key=${API_KEY}`).then((res)=>{
        setGenres(res.data.genres)
    }).catch((err)=>{
        console.log(err)
    })

   },[])
  

    return genres
}

export default useFetchGenre;