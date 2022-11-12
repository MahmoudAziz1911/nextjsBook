import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Card, Typography, CardMedia, CardContent, CardActions, IconButton, Snackbar, Alert, CardHeader, Avatar, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { deleteBook } from '../lib/books-utils';

function BookItem({ id, book }) {
    const { title, price, imageUrl } = book;
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const handleDelete = () => {
        deleteBook(id)
            .then(() =>
                setOpen(true)
            )
            .catch((err) => console.log(err))
    }
    return (
        <>
            {open && (
                <Snackbar open={open} autoHideDuration={3000}
                    onClose={() => {
                        setOpen(false); router.push("/books")
                    }}>
                    <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                        Deleted successfully !
                    </Alert>
                </Snackbar>
            )}

            <Card elevation={3} sx={{
                width: "100%",
                height: "350px",
                borderRadius: 2,
            }}>

                <CardMedia
                    component="img"
                    height="250px"
                    image={imageUrl}
                    alt={title}
                />
                <CardHeader
                    action={
                        <Link href={`/books/${id}/`}>
                            <IconButton>
                                <VisibilityIcon />
                            </IconButton>
                        </Link>
                    }
                    titleTypographyProps={{variant:'h6' }}
                    title={title}
                    subheader={price}
                />
                {/* title={book.title}
                    subheader={book.price} */}

                {/* <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                    <Link href={`/books/edit/${id}/`}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Link>
                    <Link href={`/books/${id}/`}>
                        <IconButton>
                            <VisibilityIcon />
                        </IconButton>
                    </Link>

                </CardActions> */}
            </Card>

        </>
    )
}

export default BookItem;