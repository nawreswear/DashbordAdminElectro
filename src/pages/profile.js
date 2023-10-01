import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function ProfilePage({ loggedInUser }) {
  console.log('loggedInUser passed to Profile:', loggedInUser);

  if (!loggedInUser) {
    return <div>Loading...</div>;
  }

  console.log('loggedInUser passed to Profile 2:', loggedInUser);
  
  if (!loggedInUser.admin) {
    return <div>User is not logged in or not an admin.</div>;
  }

  const admin = loggedInUser?.admin;
  console.log('loggedInUser passed to Profile 3:', loggedInUser?.admin);
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4">
          Welcome, Admin {admin.nomad} {admin.prenomad}!
        </Typography>
        <Typography>
          Email: {admin.emailad}
        </Typography>
        <Typography>
          Telephone: {admin.telad}
        </Typography>
      </Paper>
    </Box>
  );
}

export default ProfilePage;
