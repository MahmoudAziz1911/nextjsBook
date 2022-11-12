import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getBookFromId, updateBook } from '../lib/books-utils';
import BookForm from './book-form';

const UpdateBook = () => {
  const [book, setBook] = useState();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    getBookFromId(id)
      .then((data) => setBook(data))
      .catch((err) => console.log(err));
  }, [router.query.id]);

  const editFormData = (data) => {
    updateBook(id, data)
      .then((value) => console.log(value)).then(() =>
        router.push("/")
      )
      .catch((err) => console.log(err))
  }

  return (
    <>
      {book ? (
        <BookForm data={book} onSubmit={editFormData} />
      ) : (
        <p>Unable To Load Book</p>
      )}
    </>
  )
}

export default UpdateBook;