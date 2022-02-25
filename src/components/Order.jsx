import React, { useEffect, useState } from 'react'
import thali from '../images/thali.JPG'
import menuu from "../images/menu.JPG"
import offer from '../images/offer.JPG'
import Calc from './Calc'
import Thali from './Thali'

import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core'
import Autocomplete from '@mui/material/Autocomplete'
import { useDispatch, useSelector } from 'react-redux'
import { changeDish } from '../redux/slice'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme)=>({
  main: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center"
  },
  select:{
    marginBottom:theme.spacing(3),
    width:"600px"
  },
  form:{
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center"
  },
  btndish:{
    marginBottom:theme.spacing(3),
    
  },
  chkbtn:{
    margin:theme.spacing(3),
    textDecoration:"none"
  }
}))

const Order = () => {
  const classes = useStyles()
  const menu = useSelector(state => state.thalix.menu);
  const valchange = useSelector(state => state.thalix.valch)
  const remchange = useSelector(state => state.thalix.remch)
  const [selectedDish, setSelectedDish] = useState([])
  const newSel=useSelector(state=>state.thalix.selDishes)

  const dispatch = useDispatch()
  useEffect(() => {
      setSelectedDish(newSel)
  }, [remchange])
 
 
  useEffect(() => {
      
  }, [valchange])
  
  
  console.log(menu)


  const select = (event) => {

    if (!selectedDish.includes(event.target.value)) {
      setSelectedDish([...selectedDish, event.target.value])
    }
  }
  console.log(selectedDish)

  const sendDish = () => {
    dispatch(changeDish(selectedDish))
  }


  return (
    <div>
      <Grid container spacing={10} >
        <Grid item xs={12} md={4} ><img src={menuu} alt="" /></Grid>
        <Grid item xs={12} md={4} className={classes.main}  >

          <FormControl fullWidth className={classes.form}>
            <InputLabel id="demo-simple-select-label">Select dish</InputLabel>
            <Select
              onChange={select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className={classes.select}

            >
              {
                menu.map((item) => {
                  return <MenuItem value={item} > {item.dish}</MenuItem>
                })
              }
            </Select>
            <Button variant='contained' color='primary' onClick={sendDish} className={classes.btndish}>Add</Button>
          </FormControl>



          <div className={classes.calc}>
            <Calc />
          </div>

              <Link exact to='./checkout' className={classes.chkbtn}>
              <Button variant='contained' color='secondary'  >CheckOut</Button>
              </Link>
          


        </Grid>
        <Grid item xs={12} md={4} ><img src={offer} alt="" /></Grid>

      </Grid>

      <div>

        <Thali />
      </div>
    </div>
  )
}

export default Order