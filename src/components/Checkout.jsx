import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import Thali from './Thali';
import { style } from '@mui/system';




const useStyles=makeStyles((theme)=>({
box:{
  display:"flex",
  flexDirection:"column",
  alignItems:"center",marginBottom:theme.spacing(5),

},
heading:{
  margin:theme.spacing(3)
},
grid:{
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  border:"solid black 2px",
  padding:theme.spacing(2),
  borderRadius:20,
 boxShadow:`10px 10px 60px ${theme.palette.success.main}` 
}
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const Checkout = () => {
  const classes=useStyles()
  const data=useSelector(state=>state.thalix.selDishes)
  console.log(data)
  var sum=0;
  for(const item of data)
  {
    sum=sum+item.finalPrice;
  }
console.log(sum)
 
  return (
    <div>
    <Box className={classes.box}>
      <Typography variant='h2' className={classes.heading}>One More Step And you will no longer be Hungry</Typography>
      
      <Grid className={classes.grid}>
         <Typography variant='h4'>Billing</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dish</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Cost</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map(({dish,quantity,finalPrice})=>{
                return  <TableRow>
                <TableCell >{dish}</TableCell>
                <TableCell align="right">{quantity}</TableCell>
                <TableCell align="right">{finalPrice}</TableCell>
                </TableRow>
              })
            }
         

          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant='h4'>Amount Payable</Typography>
      <Typography variant='h4'>{sum}/- rs</Typography>
      
      </Grid>
      
      
    </Box>
    <Thali />
    </div >
  )
}
