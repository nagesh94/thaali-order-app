import React from 'react'
import thali from '../images/thali.JPG'
import menu from "../images/menu.JPG"
import offer from '../images/offer.JPG'
import { ClassNames } from '@emotion/react'
import { Button, Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selItemCleaner } from '../redux/slice'

const useStyles = makeStyles((theme)=>({

    container:{
      textAlign:"center"
      // [theme.breakpoints.down("md")]:{
      //   display:"flex",
      //   flexDirection:"column",
      //   justifyContent: "space-between",
      //   height:"auto"

        
      // }
    },
    link:{
      textDecoration:"none"
    },
    button:{
        margin:theme.spacing(4),
        animation: `$myEffect 3000ms infinite ${theme.transitions.easing.easeInOut}`

    },
    "@keyframes myEffect": {
        "0%": {
          transform:"scale(1)"
        },
        "50%": {
          transform:"scale(2)"
        },
      
      "100%": {
        transform:"scale(1)"
    }}}))

const Home = () => {
    const classes= useStyles()
    const dispatch=useDispatch()
    const cleaner =()=>
    {
      dispatch(selItemCleaner())
    }
  return (
    <div>
        <Grid container className={classes.container} spacing={4} >
            <Grid item md={12} lg={4} ><img src={menu} alt="" /></Grid>
            <Grid item md={12} lg={4} className='ordernow' ><img src={thali} alt=""  className='App-logo'/>

            <Link to='./order' className={classes.link}><Button variant='contained' color='secondary' className={classes.button} onClick={cleaner}>ORDER NOW</Button></Link>
            

            </Grid>
            <Grid item md={12} lg={4} ><img src={offer} alt="" /></Grid>
           
        </Grid>
    </div>
  )
}

export default Home