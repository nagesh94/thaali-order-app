import { lightGreen, orange } from "@material-ui/core/colors";
import { createTheme } from "@mui/material/styles";

 const theme=createTheme({
    palette:{
        primary:{
            main:lightGreen[700]
        },
        secondary:{
            main:orange[700]
        }
    },
    
})

export default theme