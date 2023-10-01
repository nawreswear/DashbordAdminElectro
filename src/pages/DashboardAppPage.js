import { Helmet } from 'react-helmet-async';
import { Grid, Container, Typography } from '@mui/material';
import {AppNewsUpdate} from '../sections/@dashboard/app';

export default function DashboardAppPage() {

  return (
    <>
      <Helmet>
        <title>Dashboard E-commerce</title>
      </Helmet>

      <Container maxWidth="xl" >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Welcome, Admin
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={12} >
          <AppNewsUpdate
              title="Latest News"
             
            />
          </Grid>
        </Grid>
      </Container >
    </>
  );
}
