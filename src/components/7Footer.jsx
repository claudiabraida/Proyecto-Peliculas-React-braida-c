import { Favorite } from "@mui/icons-material";
import {Box, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
export default function Footer() {

  return <>
    <Box  component={"footer"} bgcolor={"#000"}
      sx={{
        boxShadow: "0px -2px 30px #1d2ee4ff",
        textAlign:"center",
        padding: {sm:"15px", md:"25px", lg:"30px"}    
      }}
    >
      <Stack color={"secondary.main"} padding={{sm:"10", lg:"20"}}>
        <Typography width={{sm:"100%"}} fontSize={{sm:"0.8rem",  md:"1.6rem", lg:"1.6rem"}}> 
          Hecho con <Favorite sx={{position: "relative" , top:{ sm: "5px", md: "6px" }, color:"#1d2ee4ff", fontSize:{sm:"1rem", md:"1.7rem"}}}/> por Claudia Braida
        </Typography>
        <Typography fontSize={{sm:"0.7rem", md:"1.5rem", lg:"1.6rem"}} >
          Copyright  © {dayjs().year()} Braida
        </Typography>
      </Stack>
    </Box>
  </>
  
};
