import MovieCard from "../MoviesCard"
import useFetchData from "../../hooks/useFetchData";
import { useState, useRef,useCallback,useEffect } from 'react';

function MoviesList()
{

    const [ page,setPage ] = useState(1);
    const [ year,setYear ] = useState("2012");
    const dateRef = useRef();
    const { data, loading } = useFetchData( page,year,setYear );
    console.log({data})
    const observerRef = useRef();
    const observerRefFirst = useRef();
    const rootRef = useRef();
    const middleElementRef = useCallback((node)=>{
        console.log(node?.children[1].children[2].innerText)
        node?.scrollIntoView(false)
       
    },[])
       

   
    const firstElementRef = useCallback((node)=>{
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
    console.log("node", dateRef)
 
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
   
    return <div className="container" ref={rootRef}>
            <span className="container__year">{}</span>
            <div className="container__list">
                {
                   data.length>0 && data?.map((item,index)=>{
                        if(index===0)
                        {
                            return <MovieCard movieDetail={item} ref={ firstElementRef } key={ item.id } />

                        }
                        else if(index+1 === data.length-4)
                        {
                            return <MovieCard movieDetail={item} ref={ middleElementRef } key={ item.id }/>

                        }
                        else if(index === data.length-1)
                        {
                            return <MovieCard movieDetail={item} ref={ lastElementRef } key={item.id }/>
                        }else{
                            return <MovieCard movieDetail={item} key={item.id}/>

                        }
                    
                    })

                }     
            </div>
    </div>
}





export default MoviesList