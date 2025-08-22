import { useNavigate } from "react-router";
/* __________________ MUI __________________ */
import { styled } from "@mui/material/styles";
import { AppBar, Badge, Box, Button, Container, 
  IconButton, MenuItem, Toolbar, Typography
} from "@mui/material";

import { useEffect, useState } from "react";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon  from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';
import useMovies from "../hooks/useMovies";

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: -3,
//     top: 13,
//     border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
//     padding: '0 4px',
//   },
// }));
const categorias = [
  `${'inicio'}`, 
  `${'lanzamientos'}`,
  `${"popular"}`, 
  `${'buscar'}`, 
  `${'favoritos'}`
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
     <AppBar position="static" sx={{backgroundColor:"black"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box onClick={()=> navigate("/")}sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
            <IconButton
              variant="h6"
              // noWrap
              // component="a"
              // href="#app-bar-with-responsive-menu"
              sx={{
               mr: 2,
               display: { xs: 'none', md: 'flex' },
               fontFamily: 'monospace',
               fontWeight: 700,
               color: 'red',
               textDecoration: 'none',
              }}>
              {/* <AdbIcon sx={{color:"whitesmoke"}}/> */}
              BRAIDA
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              >    
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
              >
              {categorias.map((page) => (
                <MenuItem key={page} onClick={()=>handleCloseNavMenuAndNavigate(page)}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            
          </Box >

          <Box onClick={()=> navigate("/")} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <IconButton
             variant="h5"
            // noWrap 
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'whiteSmoke',
              textDecoration: 'none',
            }}
            >
              <AdbIcon sx={{color:"whitesmoke"}} />
               BRAIDA
            </IconButton>

          {/* <IconButton onClick={contextoDeFavoritos.sumar} sx={{color:"whitesmoke", display: { xs: 'flex', md: 'none' }}}> */}
            {/* <FavoriteIcon sx={{color: "#e41643"}} fontSize="inherit" /> */}
            {/* <Typography>{contextoDeFavoritos.favorite}</Typography> */}
          {/* </IconButton> */}
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {categorias.map((page) => (
              <Button 
              key={page}
              onClick={()=>handleCloseNavMenuAndNavigate(page)}
              sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
                {/* {
                categorias && categorias 
                }
                EE */}
              </Button>
            ))}
            
          </Box>
           {/* FAVORITOS */}
          {/* <IconButton onClick={contextoDeFavoritos.sumar} sx={{color:"whitesmoke"}}> */}
            {/* <FavoriteIcon sx={{color: "#e41643",display: { xs: 'none', md: 'flex' }}} fontSize="inherit" /> */}
            {/* <Typography>{contextoDeFavoritos.favorite}</Typography> */}
          {/* </IconButton> */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton aria-label="cart">
              {/* <StyledBadge badgeContent={countInCart()} sx={{color:"white"}} > */}
                {/* <ShoppingCartIcon size="large" color="error" onClick={()=> navigate("/cart")}/> */}
              
              {/* </StyledBadge> */}
            </IconButton>
              {/* <FavoriteIcon {countInFavorite()} sx={{color:"red"}} />  */}
            
          </Box>
        </Toolbar>
      </Container>
     </AppBar>

{/* 
      <h1>1-NAV BAR</h1>
      <div>
      <button onClick={()=> navigate("/")}>🍿</button>
      <button onClick={()=> navigate("/")}>Home</button>
      <button onClick={()=> navigate("new-movies")}>Últimos Lanzamientos </button>
      <button onClick={()=> navigate("popular")}>Populares</button>
      <button onClick={()=> navigate("search")}>Buscar </button>
      <button style={{border:"none",backgroundColor:"transparent"}} onClick={()=> navigate(`/favorites-movies/`)}>💙</button>
      </div> */}
    </>
  )
}
