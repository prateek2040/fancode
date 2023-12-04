import MovieCard from "../MoviesCard"
import useFetchData from "../../hooks/useFetchData";
import { useState, useRef,useCallback, useEffect } from 'react';


function MoviesList({ selectedGenres, setSelectedGenre, data, filteredData, loading, setYear, searchResults,page, setPage, query})
{

   
    const observerRef = useRef();
    const observerRefFirst = useRef();
    const rootRef = useRef();
    
    const middleElementRef1 = useCallback((node)=>{
        node?.scrollIntoView(false)
       
    },[])
    const middleElementRef2 = useCallback((node)=>{
        node?.scrollIntoView(false)
       
    },[])

    function renderResults()
    {
        if(searchResults && searchResults?.length> 0)
        {
            return searchResults?.map((item,index)=>{

                 if(index === searchResults.length-1)
                {
                    return <MovieCard movieDetail={item} ref={ lastElementRefSearch } key={item.id }/>
                }else{
                    return <MovieCard movieDetail={item} key={item.id}/>

                }
             
            
            })

        }
        else if( filteredData && filteredData?.length>0)
        {
                             
            return filteredData?.map((item,index)=>{
                if(index===0)
                {
                    return <MovieCard movieDetail={item} ref={ firstElementRef1 } key={ item.id } />

                }
                else if(index+1 === filteredData.length/2)
                {
                    return <MovieCard movieDetail={item} ref={ middleElementRef1 } key={ item.id }/>

                }
                else if(index === filteredData.length-1)
                {
                    return <MovieCard movieDetail={item} ref={ lastElementRef } key={item.id }/>
                }else{
                    return <MovieCard movieDetail={item} key={item.id}/>

                }
            
            
            })

        }else{
            return data?.map((item,index)=>{
                if(index===0)
                {
                    return <MovieCard movieDetail={item} ref={ firstElementRef2 } key={ item.id } />

                }
                else if(index+1 === data.length/2)
                {
                    return <MovieCard movieDetail={item} ref={ middleElementRef2 } key={ item.id }/>

                }
                else if(index === data.length-1)
                {
                    return <MovieCard movieDetail={item} ref={ lastElementRef } key={item.id }/>
                }else{
                    return <MovieCard movieDetail={item} key={item.id}/>

                }

            
            })

        }

    }
    useEffect(()=>{
        
        renderResults()

    },[query])


   
    const firstElementRef1 = useCallback((node)=>{

        if(loading){
            return;
        }
        if(observerRefFirst.current){
            observerRefFirst.current.disconnect();
        }
        observerRefFirst.current = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                let lastYear = new Date(filteredData[0]?.release_date || data[0].release_date).getFullYear();
                setYear(lastYear-1);
                
               
            }
        },{
            root:rootRef?.current,
        })
        if(node){
            observerRefFirst.current.observe(node);
        }

    },[loading])
    const firstElementRef2 = useCallback((node)=>{
        // node?.scrollIntoView(false);
        if(loading){
            return;
        }
        if(observerRefFirst.current){
            observerRefFirst.current.disconnect();
        }
        observerRefFirst.current = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                let lastYear = new Date(data[0].release_date).getFullYear();
                setYear(lastYear-1);
                
               
            }
        },{
            root:rootRef?.current,
        })
        if(node){
            observerRefFirst.current.observe(node);
        }

    },[loading])
 
    const lastElementRef = useCallback((node)=>{
        if(loading){
            return;
        }
        if(observerRef.current){
            observerRef.current.disconnect();
        }
        observerRef.current = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                let lastYear = new Date(data[data.length-1].release_date).getFullYear();
                setYear(lastYear+1);
            }
        },{
            root:rootRef?.current,
            rootMargin:"100px"
        })
        if(node){
            observerRef.current.observe(node);
        }
        
    },[loading])
    const lastElementRefSearch = useCallback((node)=>{
        if(loading){
            return;
        }
        if(observerRef.current){
            observerRef.current.disconnect();
        }
        observerRef.current = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                
                setPage(p=>p+1)
            }
        },{
            root:rootRef?.current,
            rootMargin:"100px"
        })
        if(node){
            observerRef.current.observe(node);
        }
        
    },[loading])
   
    return <div className="container" ref={rootRef}>
            <div className="container__list">
                {
                    renderResults()
                }            
            </div>
            
    </div>
}





export default MoviesList