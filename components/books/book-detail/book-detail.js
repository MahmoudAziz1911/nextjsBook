import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getBookFromId } from "../../lib/books-utils";
import { 
  Avatar, 
  Card, 
  CardActions, 
  CardContent, 
  CardHeader, 
  IconButton, 
  Typography, 
  CardMedia, 
  Box, 
  Divider, 
  Button 
} from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Link from "next/link";


const BookDetail = () => {
  const [book, setBook] = useState();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    getBookFromId(id)
      .then((data) => setBook(data))
      .catch((err) => console.log(err));
  }, [router.query.id]);


  return (
    <>
      {book ? (
        <Box flexWrap="wrap" sx={{padding: "20px"}} maxWidth="800px" margin="auto" >
          <Card>
            <CardHeader
              avatar={<Avatar>N</Avatar>}
              title={book.author}
              subheader={book.price}
              action={
                <Link href="/">
                <IconButton>
                  <ArrowBackIcon />
                </IconButton>
                </Link>
              }
            />
            <CardMedia
              style={{ paddingTop: "50%"}}
              image={book.imageUrl}
              title={book.title}
            />
            <CardContent>
              <Typography variant="h3" >{book.title}</Typography>
            </CardContent>
            <Divider variant="middle" light />
            <CardActions>
              <Button variant="contained" size="small" endIcon={<ThumbUpOffAltIcon />}>Like</Button>
              <Button variant="contained" size="small" color="secondary" endIcon={<ShareIcon />}>Share</Button>
            </CardActions>

          </Card>
        </Box>
      ) : (
        <p>Unable To Load Book</p>
      )}
    </>
  )
}

export default BookDetail;


//mui divider?  