import MovieCard from "../MoviesCard";
function MovieCardList({releaseYear, list})
{
    return <div className="movieCardList">
        {
            list.map((item)=>{
                return  <MovieCard movieDetail={item}  key={item.id} />
            })
        }

    </div>
}


export default MovieCardList;