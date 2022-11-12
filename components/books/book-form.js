import { useState } from "react";
import { Typography, Box, FormLabel, Checkbox, TextField, Button } from "@mui/material"
const sxLabels = { marginTop: "15px" }



const BookForm = ({data, onSubmit}) => {
  const [inputs, setInputs] = useState(
    data ? {
      title: data.title,
      author: data.author,
      imageUrl: data.imageUrl,
      price: data.price,
      featured: data.featured
    } : {
      title: "",
      author: "",
      imageUrl: "",
      price: "",
      featured: false
    }
  );
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{
        width: "60%",
        height: "100%",
        margin: "auto",
        boxShadow: "10px 10px 20px #ccc",
        borderRadius: "20px"
      }}>
        <Typography variant="h5" color="#cccc" fontWeight="bold" mt={5} padding={2} textAlign="center">
          {data ? "Edit Book" : "Add New Book"}
        </Typography>
        <Box display="flex" flexDirection="column" padding={3}>
          <FormLabel sx={sxLabels}>Title</FormLabel>
          <TextField onChange={handleChange} value={inputs.title} name="title" margin="normal" />
          <FormLabel sx={sxLabels}>Author</FormLabel>
          <TextField onChange={handleChange} value={inputs.author} name="author" margin="normal" />
          <FormLabel sx={sxLabels}>Image Url</FormLabel>
          <TextField onChange={handleChange} value={inputs.imageUrl} name="imageUrl" margin="normal" />
          <FormLabel sx={sxLabels}>Price</FormLabel>
          <TextField onChange={handleChange} value={inputs.price} name="price" margin="normal" />
          <FormLabel sx={sxLabels}>Featured</FormLabel>
          <Checkbox
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                featured: e.target.checked
              }))
            }
            checked={inputs.featured} name="featured" sx={{ marginRight: "auto" }} />
          <Button type="submit" variant="text">
            Submit
          </Button>
        </Box>
      </form>
    </>
  )
}

export default BookForm;