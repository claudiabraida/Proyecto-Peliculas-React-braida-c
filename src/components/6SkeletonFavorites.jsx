import { Card, CardMedia, Box,  Typography } from "@mui/material";
/* __________________________ SWIPER __________________________ */

import { Swiper, SwiperSlide } from "swiper/react";
import useSwiperStyle from "../hooks/useSwiperStyle";
import image from "/public/image.png"
const ghostData = [
  {id: crypto.randomUUID()},
  {id: crypto.randomUUID()},
  {id: crypto.randomUUID()},
  {id: crypto.randomUUID()},
  {id: crypto.randomUUID()},
  {id: crypto.randomUUID()},
]

export default function SkeletonFavorites() {
  const swiperEffect = useSwiperStyle("coverflow", {pagination:false,navigation:false, autoplay: false});

  return <>
    <Typography variant="h5" sx={{position: 'absolute', top: '18%', left: '10%'}} >Mis Favoritos</Typography>
    <Swiper {...swiperEffect}>
      { ghostData.map(({id}) =>
        <SwiperSlide style={{}} key={id}>
          <Box sx={{backgroundColor:'transparent'}}>
            <Card sx={{width:'90%',margin:'5% auto', backgroundColor: 'transparent'}}>
              <CardMedia 
                sx={{
                backgroundColor: '#190848',
                width: '80%', margin:'1% auto',
                boxShadow: "0px 90px 16px -1px #8a74fcff",
                border: '1px solid  #8a74fcff ',
                borderRadius: '10px',
                }} component="img" alt="tus favoritos"
                image={image} 
              />
            </Card>
            <Box
              sx={{backgroundColor:'#000000ff',
              width:'200%', height:'120px',
              textAlign:'center',
              marginLeft:'-50%'          
              }}>   
              <Typography
                sx={{
                 width:"70%", height:'90px',
                 fontSize:'1.1em', color: '#ffffffff',
                 backgroundColor:'#000000ff', boxShadow: '-10px -10px 5px #000000ff',
                 padding:'4px', marginLeft:'13%'
                  }}gutterBottom component="div">
                    elije tus favoritos para verlos aquí
              </Typography>     
            </Box>
          </Box>
        </SwiperSlide>)
      }
    </Swiper>

  </>
}
