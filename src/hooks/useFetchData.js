import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL,DISCOVER_MOVIE_URL } from '../constants';
import { API_KEY } from '../constants/secrets';

function useFetchData( page="1", releaseYear="2012", setYear, selectedGenres )
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredData, setFilteredData] = useState(data);
    //https://api.themoviedb.org/3/genre/movie/list?language=en
    useEffect(()=>{
        setLoading(true);
        axios.get(`${DISCOVER_MOVIE_URL}?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${releaseYear}&page=${page}&vote_count.gte=100`).then((res)=>{
            let sortedData = res.data.results.sort((a,b)=>{
                return b.popularity-a.popularity;
            });
            setData((p)=>{
            if(+releaseYear > 2012){
                return [...p,...sortedData]
            }else if(+releaseYear < 2012){
                return [...sortedData,...p]

            }else{
                return sortedData
            }    

            });
            setFilteredData((p)=>{
            if(+releaseYear > 2012){
                return [...p,...sortedData]
            }else if(+releaseYear < 2012){
                return [...sortedData,...p]

            }else{
                return sortedData
            }    

            });
        
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })

        


  
    },[releaseYear])

    useEffect(()=>{
        if(selectedGenres?.length>0){
            let tempItems = selectedGenres.map((selectedGenre)=>{
                let temp = data.filter((item)=>{
                    return item.genre_ids.includes(selectedGenre)
                })
                return temp;
            })
            setFilteredData(tempItems.flat())
          

        }else{
            setFilteredData(data)
        }

    },[selectedGenres, data])

   


    return { data, setData, loading,filteredData, setFilteredData }
}


export default useFetchData;