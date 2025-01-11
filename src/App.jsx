import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import useStorageState from 'use-storage-state';
// import useLocalStorageState from 'use-local-storage-state';

import ResponsiveAppBar from './components/ResponsiveAppBar';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";

const App = () => {

  var initialNavPages = [
    { title: "Home", link: "/", selected: true, },
    { title: "About", link: "about", selected: false, },
    { title: "Contact", link: "contact", selected: false, },
    { title: "FAQ", link: "faq", selected: false, },
  ];

  const useStorageState = (key, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );
    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);
    return [value, setValue];
  };

  // Method 1 - use custom hook
  const [navPages1, setNavPages1] = useStorageState('navPages1', JSON.stringify(initialNavPages));
  console.log(JSON.stringify(navPages1, null, 4));

  // Method 2 - use state only
  // const [navPages2, setNavPages2] = useState(initialNavPages);
  // console.log(JSON.stringify(navPages2, null, 4));

  // Method 3 - use local storage
  // const [navPages3, setNavPages3] = useLocalStorage('navPages3', JSON.stringify(initialNavPages));
  // console.log(JSON.stringify(navPages3, null, 4));

  // Method 4 - use local storage state
  // const [navPages4, setNavPages4] = useLocalStorageState('navPages3', JSON.stringify(initialNavPages));
  // console.log(JSON.stringify(navPages4, null, 4));

  const [navPages, setNavPages] = useState(() => {
    // console.log('inside useState, initializing navPages from localStorage');
    const localNavPages = localStorage.getItem('navPages');
    // console.log(JSON.stringify(JSON.parse(localNavPages), null, 4));
    return localNavPages ? JSON.parse(localNavPages) : initialNavPages
      // [
      //   { title: "Home", link: "/", selected: true, },
      //   { title: "About", link: "about", selected: false, },
      //   { title: "Contact", link: "contact", selected: false, },
      //   { title: "FAQ", link: "faq", selected: false, },
      // ]
  });

  // useEffect(() => {
  //   console.log('inside useEffect, saving navPages to localStorage');
  //   localStorage.setItem('navPages', JSON.stringify(navPages));
  // }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ width: "80%" }}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <BrowserRouter basename='/react-mui-navbar'>
            <ResponsiveAppBar navPages={navPages} />
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<Faq />} />
              <Route path="*" element={<Home />} />
              <Route path="" element={<Home />} />
            </Routes>
          </BrowserRouter>
          <Typography variant='h5'>ugh</Typography>
          {/* <Outlet sx={{ bgcolor: "pink"}}/> */}
        </Box>
      </Container>
    </>
  );
}

export default App;
