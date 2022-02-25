import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { quant, removeItem } from '../redux/slice';
import { Button } from '@material-ui/core';


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));




const Calc = () => {
  
  const dispatch =useDispatch()
  
  const quantityChange=(item,quantity)=>
{ 

  
   dispatch(quant({item,quantity}))
}
  const dishes=useSelector(state=>state.thalix.selDishes)
  const valueChange=useSelector(state=>state.thalix.valch)
  console.log(dishes)

React.useEffect(()=>{

},[valueChange])

const remItem=(index)=>
{
  dispatch(removeItem(index))
}

  return (
    <div>
      <TableContainer component={Paper} style={{boxShadow:`10px 10px 60px green`,borderRadius:20 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table" >
          <TableHead>
            <TableRow>
              <StyledTableCell>Dish</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Cost</StyledTableCell>
              <StyledTableCell align="right">remove</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {dishes.map(({dish,quantity,price,finalPrice},index) => {
              return <TableRow>
                <TableCell component="th" scope="row">
                  {dish}
                </TableCell>
                <TableCell align="right"><input type='number' defaultValue='1' min='1' onChange={(event)=>quantityChange(dish,event.target.value)}></input></TableCell>
                <TableCell align="right">{finalPrice}</TableCell>
                <TableCell align="right"><Button variant='contained' color='black' onClick={()=>remItem(index)}>remove</Button></TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Calc