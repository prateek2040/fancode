import './App.css';
import Header from './components/Header/index';
import MoviesList from './components/Movieslist';
import useFetchData from './hooks/useFetchData';
import Button from './components/button';
import { useState, useEffect } from 'react';
import Search from './components/Search/Search';
import useSearch from './hooks/useSearch';

function App() {
  let releaseYear = "2012";
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [query, setQuery] = useState("")
  const [ year,setYear ] = useState("2012");
  const [ page, setPage ] = useState(1);
  const { data, loading, filteredData, setData, setFilteredData  } = useFetchData( page,year,setYear, selectedGenres );

  const { results, setResults }= useSearch(query, page);
  function handleSearch(query)
  {
    setQuery(query)
  }
  function getSelectedGenre(genre)
  {

      if(selectedGenres?.includes(genre.id))
      {
        let filteredGenres = selectedGenres.filter((item)=>item!==genre.id);
        setSelectedGenres(filteredGenres)

      }else{
        setSelectedGenres([...selectedGenres,genre.id])

      }
     

  }
 

  
  
  return (
    <div className="App">
      <Header render={(genres)=>{
        return <>
          {genres.map((item)=>{
            return <Button onClick={ getSelectedGenre } data={ item } classNames={[`btn`,`${selectedGenres.includes(item.id)&&`btn-active`}`]}>{item.name}</Button>

        })}
      </>     
              
      }}/>
      <Search handleSearch={ handleSearch } query = { query }/>
      <MoviesList selectedGenres={ selectedGenres } setSelectedGenre={ setSelectedGenres} data={ data } filteredData={ filteredData } loading={ loading } setYear={ setYear } searchResults={ results } page={ page } setPage={ setPage } query={ query }/>
    </div>
  );
}

export default App;
