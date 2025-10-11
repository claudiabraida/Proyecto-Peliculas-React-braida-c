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

  return <>
    <AppBar position="absolute"
      sx={{
        backgroundColor:"#000000ff", 
        boxShadow:{
          xs: "0px -2px 28px #2335faff",
          sm: "0px -2px 30px #2335faff",
          md: "0px -1px 35px #2335faff",
          lg: "0px 3px 38px #2335faff",
          xl: "0px 5px 40px #2335faff",
        }
      }}
    >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          {/* ------------------------ hamburger menu Nav  ------------------------ */}
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: "flex",lg: "none" }
            }}
          >
            {/* .....  menu icon none ..... */}
            <IconButton size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: "secondary.main"}}
            >    
              <MenuIcon 
                sx={{
                  fontSize:{ xs: "1.9rem", sm: "1.98rem", md: "2.9rem" }
                }} 
              />
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
              sx={{ 
                display: { xs: "block", lg: "none" }
              }}
            >                
              {categorias.map((page) => (
                <MenuItem key={page} 
                  onClick={()=>handleCloseNavMenuAndNavigate(page)}
                >
                  <Typography 
                    sx={{ 
                      textAlign: "center", 
                      color:"prymary.main", 
                      fontSize: { xs: "1.2rem", md: "1.8rem" }
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>))
              }
            </Menu>            
          </Box >

          {/* ..... logo-avatar none ..... */}
          <Box onClick={()=> navigate("/")} 
            sx={{ 
              display:{ xs: "flex", lg: "none" }, 
              mr:{ xs: 2, sm: 1, md: 4 }
            }}
          >
            <IconButton variant="h6"
              sx={{
                mr:{ xs:-4, sm:-3, md:"1" } ,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize:{ xs: "1.1rem", sm: "1.3rem", md: "2.3rem" },
                letterSpacing: ".3rem",
                color: "secondary.main",
                textDecoration: "none",
              }}
            >
              {/* ..... avatar image icon none ..... */}
              <Avatar alt="ícono de películas" src={image}
                sx={{
                  width:{ xs: "30%",  sm: "28%",  md: "30%"},
                  height:{ xs: "38px", sm: "40px", md: "65px" },
                  borderRadius:"0px", 
                  padding:{ xs: "5px", md: "9px", lg:"9px" }
                }}
              />
              BRAIDA
            </IconButton>
          </Box>

          {/* ------------------------ Fixed Horizontal Nav ------------------------ */}
          <Box onClick={()=> navigate("/")} 
            sx={{ 
              display:{ sm: "none", lg: "flex" }, 
              mr: 1 
            }} 
          >
           {/* ..... logo-avatar ..... */} 
            <IconButton variant="h6"
              sx={{
                mr: {lg: 2, xl: 5} ,
                display: { xs: "none", lg: "flex" },
                fontSize: { xl: "3.2rem"},
                fontFamily:"monospace",
                fontWeight: 700,
                color:"secondary.main",
                textDecoration: "none",
              }}
            >
              <Avatar alt="ícono de películas" src={image}
                sx={{
                  width:{ xs: "25%", md: "30%", lg: "40%", xl: "45%"  },
                  height:{ xs: "40px", md: "65px", lg: "90px", xl: "120px"  },
                  padding:{ xs: "4px",  md: "9px", lg :"9px", xl: "11px"  },
                  borderRadius:"0px",              
                }} 
              />
              BRAIDA
            </IconButton>
            {/* ............................................................ */}
          </Box>
          {/* ...... buttons Horizontal Nav ...... */}
          <Box 
            sx={{ 
              flexGrow: 1, display: { xs: "none", lg: "flex" },
              justifyContent:{ lg:"center", gap:"5px" },
              gap: {xl: "7px"}, 
              alignItems:"center"
            }}
          >
            {categorias.map((page) => (
              <Button variant="outlined" key={page} onClick={()=>handleCloseNavMenuAndNavigate(page)}
                sx={{
                  textAlign:"center",
                  fontSize:{ lg:"1.2rem",  xl:"1.8rem"  }, 
                  my: 2,
                  color: "prymary.main", 
                  display: "block",
                  borderRadius:"20px",               
                }}
              > 
                {page}
              </Button>))
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </>
}
