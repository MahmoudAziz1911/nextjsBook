import { useState } from "react"
import { Typography, Box, FormLabel, Checkbox, TextField, Button } from "@mui/material"
import { signIn } from "next-auth/react"

const sxLabels = { marginTop: "15px" }

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault()
    let options = {
      redirect: false,
      email,
      password
    }
    const res = await signIn("credentials", options);
    console.log('Response SignIn', res);
  }

  return (
    <>
      <form onSubmit={handleSignIn} style={{
        width: "50%",
        height: "100%",
        margin: "auto",
        boxShadow: "10px 10px 20px #ccc",
        borderRadius: "20px"
      }}>
        <Typography variant="h5" color="#cccc" fontWeight="bold" mt={5} padding={2} textAlign="center">
          Sign In
        </Typography>
        <Box display="flex" flexDirection="column" padding={3}>
          <FormLabel sx={sxLabels}>Email</FormLabel>
          <TextField value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" margin="normal" />
          <FormLabel sx={sxLabels}>Password</FormLabel>
          <TextField value={password} onChange={e => setPassword(e.target.value)} type="text" id="password" name="password" margin="normal" />
          <Button type="submit" variant="text">
            Submit
          </Button>
        </Box>
      </form>
    </>
  )
}

export default SigninForm;