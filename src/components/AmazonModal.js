import React, { useContext } from "react";
import { Box, Modal, Stack } from "@mui/material";
import CarouselContext from "../context/carouselContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AmazonModal = ({ initialIndex, open, handleClose }) => {
  const { images } = useContext(CarouselContext);

  const image = images[initialIndex];
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack direction="row" spacing={2}>
            <img src={image} width="350" />
            <Box>
                Our vertical carousel goes here
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default AmazonModal;
