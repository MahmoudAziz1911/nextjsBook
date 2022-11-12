import Books from '../components/books/all-books';
import { getFeaturedBooks } from '../components/lib/books-utils'

const GetFeaturedBooks = ({books}) => {
    return (
        <Books books={books} />
    )
}

export default GetFeaturedBooks;

export const getStaticProps = async () => {
    const featured = await getFeaturedBooks();

    return {
        props: {
          books: featured
        }
    }
}