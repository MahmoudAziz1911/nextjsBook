import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { red } from '@mui/material/colors';


import { AppBar, Tab, Tabs, Container, Box, Toolbar } from '@mui/material';

const MainNavigation = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const handleChange = (e, val) => {
    setValue(val);
    if(val == 0) {
      router.push("/")
    }else if(val == 1) {
      router.push("/books")
    }else if(val === 2) {
      router.push("/books/add")
    }else if(val === 3) {
      router.push("/auth/signup")
    }else if(val === 4) {
      router.push("/auth/signIn")
    }
  }
  return (
    <>

      <AppBar position="sticky" sx={{ bgcolor: red[800] }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Box display="flex" margin="auto">
              <Tabs onChange={handleChange} value={value} textColor="inherit">
                <Tab label="home" />
                <Tab label="All Books" />
                <Tab label="Add Book" />
                <Tab label="Sign Up" />
                <Tab label="Sign In" />
              </Tabs>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>


     
    </>
  )

}

export default MainNavigation