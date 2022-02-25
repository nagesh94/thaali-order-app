import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'


const useStyles=makeStyles((theme)=>
({
  card:{
    

  },
  grid:{
    boxShadow:`10px 10px 60px ${theme.palette.primary.main}` 
  },heading:{
    margin:theme.spacing(3),
    fontFamily: "'Estonia',cursive",
    width:"auto"
  },
  maingrid:{
    marginBottom:theme.spacing(5)
  }

}))

const Thali = () => {
  const classes=useStyles()
  const imagesOfDishes=useSelector(state=>state.thalix.selDishes)
  console.log(imagesOfDishes)
  return (
    <div >
      <span><Typography variant='h1' color="primary" className={classes.heading}>Selected Dishes</Typography></span>
      
      
      <Grid container spacing={2} className={classes.maingrid}>
     {   imagesOfDishes.map((item)=>
        { 
          var image=item.dish
          return <Grid item xs={12} md={2} className={classes.grid}>
            <Card >
              
             <CardMedia
        component="img"
        height="194"
        
        image={item.img}
        alt="Paella dish"
        
      />
      <CardContent>
        <Typography variant='h5'>{item.dish}</Typography>
      </CardContent>
      {console.log( `${item.img}`)}
          </Card></Grid>
        })}
        </Grid>
      
    </div>
  )
}

export default Thali