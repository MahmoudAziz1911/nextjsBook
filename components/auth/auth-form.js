import { useState } from "react";
import { useRouter } from "next/router";
import { Typography, Box, FormLabel, Checkbox, TextField, Button } from "@mui/material"
import { createUser } from "../lib/users-utils";
const sxLabels = { marginTop: "15px" }

const initialState = {
    name: "",
    email: "",
    password: "",
    isAdmin: false
}
const SignupForm = () => {
    const [data, setData] = useState(initialState);
    const router = useRouter();
    const handleChange = (e) => {
        setData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }))
      }
    
    const handleSignUp = (e) => {
        e.preventDefault()
        createUser(data)
        .then(() => router.push("/"))
        .catch((err) => console.log(err))
    }

    return (
        <>
          <form onSubmit={handleSignUp} style={{
            width: "50%",
            height: "100%",
            margin: "auto",
            boxShadow: "10px 10px 20px #ccc",
            borderRadius: "20px"
          }}>
            <Typography variant="h5" color="#cccc" fontWeight="bold" mt={5} padding={2} textAlign="center">
              sign Up
            </Typography>
            <Box display="flex" flexDirection="column" padding={3}>
              <FormLabel sx={sxLabels}>Name</FormLabel>
              <TextField onChange={handleChange} value={data.name} name="name" margin="normal" />
              <FormLabel sx={sxLabels}>Email</FormLabel>
              <TextField onChange={handleChange} value={data.email} name="email" margin="normal" />
              <FormLabel sx={sxLabels}>Password</FormLabel>
              <TextField onChange={handleChange} value={data.password} name="password" margin="normal" />
              <FormLabel sx={sxLabels}>Admin</FormLabel>
              <Checkbox
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    isAdmin: e.target.checked
                  }))
                }
                checked={data.isAdmin} name="featured" sx={{ marginRight: "auto" }} />
              <Button type="submit" variant="text">
                Submit
              </Button>
            </Box>
          </form>
        </>
      )
}

export default SignupForm;