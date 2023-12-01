import MovieCard from "../MoviesCard"
import useFetchData from "../../hooks/useFetchData";
import { useState, useRef,useCallback,useEffect } from 'react';

function MoviesList()
{

    const [ page,setPage ] = useState(1);
    const [ year,setYear ] = useState("2012");
    const { data, loading, newData } = useFetchData( page,year,setYear );
    console.log("data from list",{data})
    const observerRef = useRef();
    const observerRefFirst = useRef();
    const rootRef = useRef();
    const middleElementRef = useCallback((node)=>{
        node?.scrollIntoView(false)
    },[])
       

   
    const firstElementRef = useCallback((node)=>{
        // node?.scrollIntoView(false);

        console.log("first element", node)
        if(loading){
            return;
        }
        if(observerRefFirst.current){
            observerRefFirst.current.disconnect();
        }
        observerRefFirst.current = new IntersectionObserver((entries)=>{
            console.log({entries})
            if(entries[0].isIntersecting){
                console.log("intersecting sirst",data[0].release_date);
                let lastYear = new Date(data[0].release_date).getFullYear();
                console.log({lastYear})
                setYear(lastYear-1);
                
               
            }
        },{
            root:rootRef?.current,
            rootMargin:"100px"
        })
        if(node){
            observerRefFirst.current.observe(node);
        }

    },[loading])
 
    const lastElementRef = useCallback((node)=>{
        console.log("last elemet", node)
        if(loading){
            return;
        }
        if(observerRef.current){
            observerRef.current.disconnect();
        }
        observerRef.current = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                console.log("intersecting last");
                let lastYear = new Date(data[data.length-1].release_date).getFullYear();
                console.log({lastYear})
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
   
    return <div className="container" ref={rootRef}>
            <span className="container__year">{year}</span>
            <div className="container__list">
                {
                    newData?.data?.length>0 && newData?.data?.map((item,index)=>{
                        if(index===0)
                        {
                            return <MovieCard movieDetail={item} ref={ firstElementRef } key={item.id} />

                        }
                        else if(index+1 === data.length-4)
                        {
                            return <MovieCard movieDetail={item} ref={ middleElementRef } key={item.id}/>

                        }
                        else if(index === data.length-1)
                        {
                            return <MovieCard movieDetail={item} ref={ lastElementRef } key={item.id}/>
                        }else{
                            return <MovieCard movieDetail={item} key={item.id}/>

                        }
                    
                    })

                }     
            </div>
    </div>
}





export default MoviesList