import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { BASE_URL } from '../constants';


function useSearch(query, page)
{
    const [results, setResults] = useState([]);
    const getData = useCallback(debounce(async function getData(query, page, signal)
    {
        try{
            let data = await axios.get(`${BASE_URL}/3/search/movie?api_key=2dca580c2a14b55200e784d157207b4d&query=${query}&page=${page}`,{
                signal
            });
            setResults(data?.data?.results);

        }catch(err)
        {
            console.log(err)
        }
    },200),[page]);
    useEffect(()=>{
       const controller = new AbortController();
       const signal = controller.signal
       getData(query, page, signal);

       return ()=>{
        return controller.abort();
       }

    },[ query,page,getData ])

    return { results, setResults }


}


export default useSearch;