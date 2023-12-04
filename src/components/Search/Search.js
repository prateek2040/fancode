import { useState } from 'react'
function Search({ handleSearch, query })
{
  
    return <div className="search">
        <input type="search" value={ query } onChange={(e)=>{
           handleSearch(e.target.value)
        }} placeholder='search movie'/>

    </div>
}




export default Search;