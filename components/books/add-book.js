import React from 'react'
import { createBook } from '../lib/books-utils';
import BookForm from './book-form';

const AddNewBook = () => {
  const postFormData = (data) => {
    createBook(data).then((value) => console.log(value)).catch((err) => console.error(err))
  }
  return (
    <div> 
        <BookForm onSubmit={postFormData} />
    </div>
  )
}

export default AddNewBook;