import React from 'react';
import { makeStyles } from '@mui/styles';
 
import { Card,CardContent,CardMedia } from '@mui/material';
 
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';

const useStyles = makeStyles({
   root: {
      maxWidth: 645,
       
      margin: '20px',
   },
   media: {
      height: 440,
   },
   title: {
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      fontSize: '2rem',
      color: '#fff',
   },
   desc: {
      fontFamily: 'Nunito',
      fontSize: '1.1rem',
      color: '#ddd',
   },
});

export default function ImageCard({ place, checked }) {
   const classes = useStyles();

   return (
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
         <Card className={classes.root} sx={{backgroundColor: 'rgba(0,0,0,0.5)',}}>
            <CardMedia
               className={classes.media}
               image={place.imageUrl}
               title="Contemplative Reptile"
            />
            <CardContent>
               <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  className={classes.title}
               >
                  {place.title}
               </Typography>
               <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.desc}
               >
                  {place.description}
               </Typography>
            </CardContent>
         </Card>
      </Collapse>
   );
}