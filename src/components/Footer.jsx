import { Box, Typography } from '@material-ui/core'
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'

const Footer = () => {
  return (
    <Box 
    sx={{display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"black",
        color:"white"
        ,padding:10
    }}>

      <Typography variant='h6' > <span>&copy;</span> Natures Dhaba 2010 </Typography>

      <Box>
        <Instagram/>
        <Facebook/>
        <Twitter/>
        <LinkedIn/>
      </Box>
    </Box>
    
  )
}

export default Footer