import { useState, forwardRef } from 'react';
const MovieCard = forwardRef(function (props,ref)
{
    // //Show the movie title, image, genre, cast, director, and a short description related
// to the movie in each information card.
    const { movieDetail } = props;
    const [ show ,setShow ]  = useState(false);
    return <div className="movieCard" ref={ ref }>
            <div className="movieCard__header">
                <img src={`https://image.tmdb.org/t/p/w200/${movieDetail.backdrop_path}`} width="158" height="94" alt="movieimage" />
            </div>
            <div className="movieCard__body">
                <h5><b>{movieDetail.title}</b></h5>
                <p style={{
                    color:"gray"
                }}>{movieDetail.release_date}</p>
                {
                    show ? <p><i>{movieDetail.overview}</i></p> 
                    :  <p><i>{`${movieDetail.overview.split('').slice(0,30).join('')}...`}</i></p>
                }        
                {show?<p onClick={()=>{setShow(false)}}><a><i>Read Less</i></a></p>
                    :<p onClick={()=>{setShow(true)}}><a><i>Read More</i></a></p>
                }
            </div>
        </div>
})


export default MovieCard;