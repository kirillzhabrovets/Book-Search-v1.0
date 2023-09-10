import React from 'react';
import './BookItems.css'


const BookItems = (props) => {

    const {bookDetails} = props
    const {author,imageLink,title} = bookDetails
    

  return (
    <li>
        <img src={imageLink} alt='title'/>
        <h3>Название: {title} </h3>
        <p>Автор: {author}</p>
    </li>
  )
}

export default BookItems