import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './theme';
import ScrollToTop from './components/scroll-to-top';
import Router from './routes';
import Profile from './pages/profile';
import AccountPopover from './layouts/dashboard/header/AccountPopover';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Check if a user is already logged in based on localStorage
    const storedUser = localStorage.getItem('loggedInUser');

    if (storedUser) {
      // If a user is found in localStorage, set it as the loggedInUser
      setLoggedInUser(JSON.parse(storedUser));
    } else {
      // If not found, fetch user data from the API
      axios
        .get('http://localhost:3002/api/admins')
        .then((response) => {
          const adminUser = response.data.find((user) => user.admin);
          setLoggedInUser(adminUser);

          // Store the user in localStorage for future sessions
          localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <Router loggedInUser={loggedInUser} />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
