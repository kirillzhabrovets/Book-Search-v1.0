import React, { useState } from 'react';
import { v4 } from 'uuid';
import './BooksSearch.css'
import BookItems from './BookItems/BookItems';

const BooksSearch = () => {

  const [searchTerm, setSearchTerm]= useState('')
  const [searchResult, setSearchResult] = useState( [] )

  const getSearchResult = async ()=>{
    const response = await fetch(`https://apis.ccbp.in/book-store?title=${searchTerm}`); 

    //Можно вставить апишку гуглбукса https://www.googleapis.com/books/v1/volumes?q='+search'&key=AIzaSyBhr6k_o4Dhh9SZex239y1_qnqbvBoc70E 

    const data = await response.json();
    const updateData = data.search_results.map(each=>({
      id:v4(),
      author:each.author,
      imageLink:each.imageLink,
      title:each.title
    }))
    setSearchResult(updateData);
  }
  console.log(searchResult);

  const handleKeyDown = (e)=> {
    if(e.key === "Enter"){
      getSearchResult();
    }
  }


  return (
    <div>
        <header>
          <h1>Поиск книг</h1>
          <input onKeyDown={handleKeyDown} onChange={(e)=>setSearchTerm(e.target.value)} type='Search' placeholder='Введите название книги'/> 
        </header>

        <main>
          <ul>
            {searchResult.map(each=> <BookItems key={each.id} bookDetails={each}/>)}
          </ul>
        </main>
    </div>
  )
}

export default BooksSearch