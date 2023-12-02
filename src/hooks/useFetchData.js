import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants';
import { API_KEY } from '../constants/secrets';

function useFetchData( page="1", releaseYear="2012", setYear )
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [yearFetched,setYearFetched] = useState([])
    useEffect(()=>{
        setLoading(true)
        axios.get(`${BASE_URL}?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${releaseYear}&page=${page}&vote_count.gte=100`).then((res)=>{
            let sortedData = res.data.results.sort((a,b)=>{
                return a.popularity-b.popularity
            })
            
            setData((p)=>{
            if(+releaseYear > 2012){
                return [...p,...sortedData]
            }else if(+releaseYear < 2012){
                return [...sortedData,...p]

            }else{
                return sortedData
            }    

            });
         

        
            setLoading(false)
        })

  
    },[releaseYear])


    return { data,loading }
}


export default useFetchData;