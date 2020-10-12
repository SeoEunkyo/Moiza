import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import {Container,Grid,Box,makeStyles,Typography} from '@material-ui/core';


//const severConfig = require('../serverConfig');


const useStyles = makeStyles(theme => ({
  totalSector:{
    backgroundColor : '#f0f5f5',
  },
  titleSector: {
    textAlign : "center",
    marginTop : '3%'
  },
  
  bodySector: {
    height: "600px",
    backgroundColor : '#f0f5f5',
    marginTop : '1%'
  },
}));



const Home = (props) => {
  const classes = useStyles();
  //let [specList, setSpecList ]= useState(props.speclist);
  return (
    <Container maxWidth="xl">
      <Grid>
        <Container maxWidth="md">
          <Box className={classes.titleSector}>
            <Typography  gutterBottom> create group Title.</Typography>
          </Box>
          <Box className={classes.bodySector}>
            
          </Box>
          </Container>
      </Grid>

    </Container>
  );
};



export default Home