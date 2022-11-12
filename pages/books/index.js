import * as React from 'react';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Books from '../../components/books/all-books'
import { getBooks } from '../../components/lib/books-utils'
import { grey } from '@mui/material/colors';

const handleClick = (e) => {
    e.preventDefault();
}
const GetAllBooks = ({ books }) => {
    return (
        <>
            <Box
             sx={{
                marginLeft: "30px",
                bgcolor: grey[200],
                maxWidth: "300px",
                borderRadius: "7px",
             }}
             onClick={handleClick}>
                <Breadcrumbs sx={{ margin: "50px 0 0 5px" }}>
                    <Link underline="none" fontSize={18} color="inherit" href="/">
                        Home
                    </Link>
                    <Typography fontSize={18} color="text.primary">Books</Typography>
                </Breadcrumbs>
            </Box>
            <Books books={books} />
        </>
    )
}

export default GetAllBooks;

export const getStaticProps = async () => {
    const books = await getBooks();
    return {
        props: {
            books
        }
    }
}

