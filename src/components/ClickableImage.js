import React, { useContext, useState } from "react";
import CarouselContext from "../context/carouselContext";
import { Box } from "@mui/material";
import AmazonModal from "./AmazonModal";

const ClickableImage = ({ index }) => {
  const { images } = useContext(CarouselContext);

  const image = images[index];

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  }

  const closeModal = () => {
      setModalOpen(false)
  }

  return (
    <>
      <Box sx={{
          cursor: 'pointer'
      }}>
        <img
          onClick={() => setModalOpen(true)}
          src={image}
          width="350"
        />
        <AmazonModal initialIndex={index} open={modalOpen} handleClose={closeModal} />
      </Box>
    </>
  );
};

export default ClickableImage;
