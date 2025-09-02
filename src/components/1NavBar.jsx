import { useNavigate } from "react-router";
import image from "/public/vecteezy_movie-film-slate-clipart-illustration_49568401.ico"
/* __________________ MUI __________________ */
import { AppBar, Avatar, Box, Button, Container, 
  IconButton, MenuItem, Toolbar, Typography
} from "@mui/material";

import {useState } from "react";
import MenuIcon  from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';

const categorias = [
  `${"inicio"}`, 
  `${"lanzamientos"}`,
  `${"populares"}`, 
  `${"buscar"}`, 
  `${"favoritos"}`
];

export default function NavBarMovies() {
  const navigate = useNavigate();
/* __________________ MUI __________________ */
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (textCategory) => {
    setAnchorElNav(null);
  };

  const handleCloseNavMenuAndNavigate = (textCategory) => {
    setAnchorElNav(null);
    navigate(`/${textCategory}`); 
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
     <AppBar  position="absolute" sx={{backgroundColor:"black", boxShadow: "0px -2px 30px #2335faff",}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box onClick={()=> navigate("/")}sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} >
            <IconButton variant="h6"
              sx={{
               mr: 2,
               display: { xs: "none", md: "flex" },
               fontSize:"2.1em",
               fontFamily:"monospace",
               fontWeight: 700,
               color:"secondary.main",
               textDecoration: "none",
              }}>
              <Avatar 
              sx={{
                width:{xs:"25%", sm:"30%", md:"40%"}, height:{xs:"40px",sm:"65px", md:"90px"},
                borderRadius:"0px", padding:{xs:"4px", sm:"9px", md:"9px"
              }}} alt="ícono de películas" src={image}/>
              BRAIDA
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none"}}}>
            <IconButton size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: "secondary.main"}}
              >    
              <MenuIcon sx={{fontSize:{xs:"1em", sm:"2em"}}} />
            </IconButton>
            
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal:"left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" }}}
              >
              {categorias.map((page) => (
                <MenuItem key={page} onClick={()=>handleCloseNavMenuAndNavigate(page)}>
                  <Typography sx={{ textAlign: "center", color:"prymary.main"}}>{page}</Typography>
                </MenuItem>          
              ))}
            </Menu>            
          </Box >

          <Box onClick={()=> navigate("/")} sx={{ display: { xs: "flex", md: "none" }, mr: 2,}}>
            <IconButton variant="h6"
            sx={{
              mr:{xs:-3, sm:"1"} ,
              display: { xs: "flex",md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize:{xs:"1.3em",sm:"2.5em"},
              letterSpacing: ".3rem",
              color: "secondary.main",
              textDecoration: "none",
            }}
            >
            <Avatar 
            sx={{
              width:{xs:"25%", sm:"30%"}, height:{xs:"40px",sm:"65px"},
              borderRadius:"0px", padding:{xs:"4px", sm:"9px", md:"9px"
            }}} alt="ícono de películas" src={image}/>
              BRAIDA
            </IconButton>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent:{md:"space-around"} }}>
            {categorias.map((page) => (
              <Button variant="outlined" key={page} onClick={()=>handleCloseNavMenuAndNavigate(page)}
                sx={{
                width:"19%",
                p:"6px",
                fontSize:{xs:"1em", sm:"2em", md:"0.9em"}, my: 2,
                color: "prymary.main", display: "block",
                // border: "px solid #4d2affff",
                borderRadius:"20px",
                }}
              > 
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
     </AppBar>
    </>
  )
}
