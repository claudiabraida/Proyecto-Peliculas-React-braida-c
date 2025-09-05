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
  const swiperEffect = useSwiperStyle("coverflow", {pagination:true,navigation:true, autoplay: false});

  return <>
  <Box height={"460px"} mt={"2%"}>
    <Swiper {...swiperEffect}>
      { ghostData.map(({id}) =>
        <SwiperSlide className="sliderSkeletonFavorites" key={id}>
          <Card 
            sx={{
              width: "100%",
              objectFit: "cover",
              border: "inherit",
              }}>
            <CardMedia component="img" alt="tus favoritos" image={image} />
          </Card>   
          <Typography className="title"
            width={{xs:100, sm:"70%"}}
            position={"absolute"}
            left={20}
            bottom={{xs:9, md:1}}
            fontSize={{xs:15, sm:20, md:"1.5em"}} 
            color={"typography.color"}
            borderRadius={"0px 0px 10px 10px"}
            sx={{
              display:"-webkit-box",
              WebkitBoxOrient: "vertical",
              textOverflow:"ellipsis",
              overflow:"hidden",
              WebkitLineClamp:{xs:"2"},
            }} gutterBottom component="div"> Aquí verás tus favoritos
          </Typography>    
        </SwiperSlide>)
      }
    </Swiper>
  </Box>

  </>
}
