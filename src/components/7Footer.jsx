import { Favorite } from "@mui/icons-material";
import {Box, Stack, Typography } from "@mui/material";
export default function Footer() {

  return <>
  <Box component={"footer"} bgcolor={"#000"} sx={{
      boxShadow: "0px -2px 30px #1d2ee4ff",
      textAlign:"center",
      padding: {xs:"20px", sm:"25px", md:"30px",},
      // py:3,
      // px: 2,
      // mt: "auto"
    
    }}>
      <Stack color={"secondary.main"} padding={{xs:"10",sm:"20"}}>
        <Typography width={{xs:"100%"}} fontSize={{sm:"1.8em", md:"1.6em"}}> Hecho con <Favorite sx={{color:"#1d2ee4ff", fontSize:{sm:"1.1em"}}}/> por Claudia Braida</Typography>
        <Typography fontSize={{sm:"1.8em", md:"1.6em"}}>Copyright  ©  2025 Braida</Typography>
      </Stack>
      </Box>
  </>
  
}
