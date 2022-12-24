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

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack direction="row" spacing={4}>
            <img src={images[initialIndex]} width="400" />
            <Box>
               <Stack direction="column" spacing={1}>
                    {
                        images.map((image, index) => (<img src={image} width="100" />))
                    }
               </Stack>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default AmazonModal;
