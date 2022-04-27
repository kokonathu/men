import { Backdrop, CircularProgress } from "@mui/material";

export const Progress:React.VFC = () =>{
  return (  
    <Backdrop
      sx={{backgroundColor:"rgba(0,0,0,0.20)" }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>      
    );
}

