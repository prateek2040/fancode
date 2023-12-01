import './App.css';
import Header from './components/Header/index';
import MoviesList from './components/Movieslist';
import useFetchData from './hooks/useFetchData';

function App() {
  let releaseYear = "2012";
  let page = 1

  
  
  return (
    <div className="App">
      <Header/>
      <MoviesList/>
    </div>
  );
}

export default App;
