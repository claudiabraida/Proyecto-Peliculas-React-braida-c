
import RouterMovies from "./router/RouterMovies";
import FavoriteContextProvider from "./context/FavoriteContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { CssBaseline } from "@mui/material";
// import "./swiper.module.css"

const theme = createTheme({
   mode: "dark",
    palette: {
      prymary:{
       main: "#66b2ff"
      },
      secondary: {
        main: "#4d2affff",
      },
      background: {
        paper: "#000000ff" ,
      },
      typography:{
        color:"#ffffffff"
        // fontSize: ""
      },
    },
    
    breakpoints: {
      values: {
        xs: 0,
        sm: 320, 
        md: 768,
        lg: 1024,
        xl: 1280
      }
    }
})

function App() {
  // console.log("ME VES")
  return (
  <FavoriteContextProvider>
    <ThemeProvider theme={theme}>
    <RouterMovies />
    </ThemeProvider>
  </FavoriteContextProvider>
  )
}

export default App
