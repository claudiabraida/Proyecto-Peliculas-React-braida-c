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
     <AppBar position="absolute"
      sx={{
        backgroundColor:"#000000ff", 
        boxShadow:{
          sm: "0px -2px 30px #2335faff",
          md: "0px -1px 35px #2335faff",
          lg: "0px 3px 38px #2335faff",
        }
      }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          {/* ------------------------ hamburger menu Nav  ------------------------ */}
          <Box sx={{ flexGrow: 1, display: { sm: "flex", lg: "none" }}}>
            {/* .....  menu icon none ..... */}
            <IconButton size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: "secondary.main"}}
              >    
              <MenuIcon sx={{fontSize:{ sm: "1.9rem", md: "2.9rem"}}} />
            </IconButton>
            {/* ..... menu select none ..... */}
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
              sx={{ display: { sm: "block", lg: "none" }}}
              >
                
              {categorias.map((page) => (
                <MenuItem key={page} onClick={()=>handleCloseNavMenuAndNavigate(page)}>
                  <Typography sx={{ textAlign: "center", color:"prymary.main", fontSize: {sm: "1.2rem", md: "1.8rem"}}}>
                    {page}
                  </Typography>
                </MenuItem>          
              ))}
            </Menu>            
          </Box >

          {/* ..... logo-avatar none ..... */}
          <Box onClick={()=> navigate("/")} sx={{ display: { sm: "flex", lg: "none" }, mr: {sm: 2, md: 4}}}>
            <IconButton variant="h6"
              sx={{
                // backgroundColor:"red",
                mr:{sm:-3, md:"1"} ,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize:{ sm: "1.3rem", md: "2.3rem"},
                letterSpacing: ".3rem",
                color: "secondary.main",
                textDecoration: "none",
              }}
            >
              {/* ..... avatar image icon none ..... */}
              <Avatar alt="ícono de películas" src={image}
                sx={{
                  width:{sm: "25%",  md: "30%"},
                  height:{sm: "40px", md: "65px"},
                  borderRadius:"0px", 
                  padding:{sm: "4px",  md: "9px", lg:"9px"}
                }}
              />
              BRAIDA
            </IconButton>
          </Box>

          {/* ------------------------ Fixed Horizontal Nav ------------------------ */}
          <Box onClick={()=> navigate("/")} sx={{ display: { sm: "none", lg: "flex" }, mr: 1 }} >
           {/* ..... logo-avatar ..... */} 
            <IconButton variant="h6"
              sx={{
                mr: 2,
                display: { sm: "none", lg: "flex" },
                fontSize:"2.6rem",
                fontFamily:"monospace",
                fontWeight: 700,
                color:"secondary.main",
                textDecoration: "none",
              }}
            >
              <Avatar alt="ícono de películas" src={image}
                sx={{
                  width:{ sm: "25%",  md: "30%", lg: "40%"},
                  height:{ sm: "40px", md: "65px", lg: "90px"},
                  padding:{ sm: "4px",  md: "9px", lg :"9px",
                  borderRadius:"0px",
                }}} 
              />
              BRAIDA
            </IconButton>
            {/* ............................................................ */}
          </Box>
          {/* ...... buttons Horizontal Nav ...... */}
          <Box 
            sx={{ 
              flexGrow: 1, display: { sm: "none", lg: "flex" },
              justifyContent:{ lg:"center", gap:"5px"},
              alignItems:"center"
            }}
          >
            {categorias.map((page) => (
            <Button variant="outlined" key={page} onClick={()=>handleCloseNavMenuAndNavigate(page)}
              sx={{
                textAlign:"center",
                fontSize:{ lg:"1.2rem"}, my: 2,
                color: "prymary.main", display: "block",
                borderRadius:"20px",               
              }}
            > 
              {page}
            </Button>))}
          </Box>
        </Toolbar>
      </Container>
     </AppBar>
    </>
  )
}
