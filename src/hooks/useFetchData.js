import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants';
import { API_KEY } from '../constants/secrets';

function useFetchData( page="1", releaseYear="2012", setYear )
{
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);
    console.log({newData})
    const [loading, setLoading] = useState(false);
    const [yearFetched,setYearFetched] = useState([])
    useEffect(()=>{
        setLoading(true)
        console.log({yearFetched})
        console.log({releaseYear})   
        axios.get(`${BASE_URL}?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${releaseYear}&page=${page}&vote_count.gte=100`).then((res)=>{
            console.log({res})
            setData((p)=>{
            if(+releaseYear > 2012){
                return [...p,...res.data.results]
            }else if(+releaseYear < 2012){
                return [...res.data.results,...p]

            }else{
                return res.data.results
            }
                

            });
            setNewData((p)=>{
            if(+releaseYear > 2012){
                return [...p,{releaseYear:[releaseYear],"data":res.data.results}]
            }else if(+releaseYear < 2012){
                return [{releaseYear,"data":res.data.results},...p]

            }else{
                return [{releaseYear,"data":res.data.results}]
            }
                

            });
         

        
            setLoading(false)
        })

  
    },[releaseYear])


    return { data,loading, newData }
}


export default useFetchData;