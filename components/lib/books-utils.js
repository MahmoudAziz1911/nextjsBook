import axios from "axios";

export const getBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books");
    if(response.status !== 200){
        return new Error({message: "Internal Server Error"})
    }
    const data = response.data?.books;
    return data;
}

export const getFeaturedBooks = async () => {
    const books = await getBooks();
    if(books.length == 0){
        return [];
    }
    const featuredBooks = books.filter((book) => book.featured === true);
    return featuredBooks;
}

export const createBook = async (data) => {
    const response = await axios.post("http://localhost:3000/api/books", {
        title: data.title,
        author: data.author,
        price: Number(data.price),
        imageUrl: data.imageUrl,
        featured: Boolean(data.featured)
    });
    if(response.status !== 200){
        return new Error({message: "Internal Server Error"})
    }
    const resData = await response.data;
    return resData;
}

export const getBookFromId = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/book/${id}`);
    if(res.status !== 200){
        return new Error({message: "Unable To Fetch Book From Given ID"})
    }
    const data = await res.data;
    return data.book;
}

export const updateBook = async (id, data) => {
    const response = await axios.put(`http://localhost:3000/api/book/${id}`, {
        title: data.title,
        author: data.author,
        price: Number(data.price),
        imageUrl: data.imageUrl,
        featured: Boolean(data.featured)
    });
    if(response.status !== 200){
        return new Error({message: "Internal Server Error"})
    }
    const resData = await response.data;
    return resData;
}

export const deleteBook = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/book/${id}`);
    if(res.status !== 200){
        return new Error({message: "Unable To Delete Book !"})
    }
    const data = await res.data;
    return data;
}
