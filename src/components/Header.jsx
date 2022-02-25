import { AppBar, makeStyles } from '@material-ui/core'
import { CardGiftcardRounded, CardTravelOutlined, Home, Menu } from '@material-ui/icons'
import { Button, Toolbar, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { color, display, maxWidth } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import theme from '../theme/maintheme'
import flowers from '../images/flowers.png'


const useStyles = makeStyles((xyz) => ({
    maindiv: {
        marginBottom: theme.spacing(2),
        
        padding: xyz.spacing(3),
        boxShadow:`10px 10px 30px red`,
        
    },
    main: {
        margin: 0,
        background: 'linear-gradient(45deg, #ffffff 80%,#ff7043 10%, #0091ea 90%)',

        display: "flex",
        justifyContent: "space-between",
        padding:theme.spacing(1)
    },
    menubutton: {
        display: "none",
        // [xyz.breakpoints.down('md')]: {
        //     display: "inline",
        //     color: "black"
        // }
    },
    link: {
        textDecoration: "none"
    },
    headings: {
        color: "black",
        padding: xyz.spacing(1),
        // [xyz.breakpoints.down('md')]: {
        //     display: "none"
        // }
    },
    icons: {
        color: "black",
        [xyz.breakpoints.down('md')]: {
            display: "none"
        }
    },
    iconhome: {
        color: "black",
        // [xyz.breakpoints.down('md')]: {
        //     display: "none"
        // }
    },
    divleft: {
        display: "flex",
        alignItems: "center"
    },
    divright: {
        display: "flex",
        alignItems: "center"
    },
    logocontainer: {
        display: "flex"
    },
    logo: {
        fontFamily: "'Estonia', cursive",
        color: "green"
    }, flowersleft:
    {
        maxHeight: '60px',
        width: "200px",
        marginRight: theme.spacing(3),
        [xyz.breakpoints.down('md')]: {
            display: "none"
        }
    }
    , flowersright:
    {
        maxHeight: '60px',
        width: "200px",
        marginleft: theme.spacing(3), [xyz.breakpoints.down('md')]: {
            display: "none"
        }
    },
    // drop:{
        
    //     // display:({bool})=>(bool ? "block":"none"),
    //     marginTop:xyz.spacing(8),
    //     backgroundColor:"grey",
    //     padding:0,
    // }


}))

const Header = () => {
    const [bool,setBool]=useState(false)
    const classes = useStyles({ theme ,bool})
    const dropDown=()=>
    {
        setBool(!bool)
    }

    return (
        <div className={classes.maindiv}>
            <AppBar position='fixed'>
                <Toolbar className={classes.main}>
                    <ThemeProvider theme={theme}>
                        <div className={classes.menubutton}>
                            <Button onClick={dropDown} ><Menu /></Button>
                        </div>
                        <div className={classes.divleft}>
                            <Home className={classes.iconhome} />
                            <Link to='./' className={classes.link}><Typography variant='h6' className={classes.headings}>HOME</Typography></Link>
                        </div>
                        <div className={classes.logocontainer}>
                            <img src={flowers} className={classes.flowersleft} />
                            <Typography variant='h3' className={classes.logo} sx={{ fontFamily: "'Estonia',cursive", fontWeight: "bolder" }}>Natures Dhaba</Typography>
                            <img src={flowers} className={classes.flowersright} />
                        </div>
                        <div className={classes.divright}>
                            <CardGiftcardRounded className={classes.icons} />
                            <Link to='./order/checkout' className={classes.link}><Typography variant='h6' className={classes.headings}>CHECKOUT</Typography></Link>
                        </div>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
            {/* <div className={classes.drop}>
            <Link to='./' className={classes.link}><Typography variant='h6' className={classes.headings}>HOME</Typography></Link>
            <Link to='./checkout' className={classes.link}><Typography variant='h6' className={classes.headings}>CHECKOUT</Typography></Link>
               

            </div> */}

        </div>
    )
}

export default Header