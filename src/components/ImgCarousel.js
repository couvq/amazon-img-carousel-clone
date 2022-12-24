import React from "react";
import { useContext } from "react";
import CarouselContext from "../context/carouselContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { Box, Button } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ClickableImage from "./ClickableImage";

const ImgCarousel = () => {
  const { images } = useContext(CarouselContext);

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          direction="horizontal"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <ClickableImage index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default ImgCarousel;
