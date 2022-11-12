import { Grid } from "@mui/material";
import BookItem from "./book-item";

const BookGrid = ({ books }) => {
    return (
        <Grid padding={3} spacing={2} container>
            {books.map((book) => (
                <Grid 
                    xs={6} 
                    sm={4} 
                    md={3} 
                    lg={2} 
                    height={"400px"} 
                    width={"100%"} 
                    item key={book._id}>
                        <BookItem id={book._id} book={book} />
                </Grid>
            ))}

        </Grid>

    )
}

export default BookGrid;