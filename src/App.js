import React from 'react';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '300vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}