import { Favorite } from "@mui/icons-material";
import {Box, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
export default function Footer() {

  return <>
    <Box  component={"footer"} bgcolor={"#000"}
      sx={{
        boxShadow: "0px -2px 30px #1d2ee4ff",
        textAlign:"center",
        padding: {xs:"15px", md:"25px", lg:"30px"}    
      }}
    >
      <Stack color={"secondary.main"} padding={{xs:"10", lg:"20"}}>
        <Typography width={{xs:"100%"}} fontSize={{xs:"0.9rem",  md:"1.6rem", lg:"1.6rem"}}> 
          Hecho con <Favorite sx={{position: "relative" , top:{ xs: "5px", md: "6px" }, color:"#1d2ee4ff", fontSize:{xs:"1rem", md:"1.7rem"}}}/> por Claudia Braida
        </Typography>
        <Typography fontSize={{xs:"0.7rem", md:"1.5rem", lg:"1.6rem"}} >
          Copyright  © {dayjs().year()} Braida
        </Typography>
      </Stack>
    </Box>
  </>
  
};
