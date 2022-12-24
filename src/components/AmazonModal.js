import React, { useContext, useState } from "react";
import { Box, IconButton, Modal, Stack, useMediaQuery } from "@mui/material";
import CarouselContext from "../context/carouselContext";
import ClearIcon from "@mui/icons-material/Clear";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const AmazonModal = ({ initialIndex, open, handleClose }) => {
  const isTabletOrSmaller = useMediaQuery("(max-width: 768px)");
  const { images } = useContext(CarouselContext);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else {
        setActiveIndex(images.length - 1);
      }
    } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      if (activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} onKeyDown={handleKeyDown}>
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Stack>
          <Stack sx={{ p: 4 }} direction={isTabletOrSmaller ? "column" : "row"} spacing={4}>
            <img src={images[activeIndex]} width={isTabletOrSmaller ? "300" : "600"} />
            <Box>
              <Stack direction={isTabletOrSmaller ? "row" : "column"} spacing={1}>
                {images.map((image, index) => (
                  <img
                    style={{
                      cursor: "pointer",
                      border: activeIndex === index ? "3px solid orange" : "",
                    }}
                    key={index}
                    src={image}
                    width={isTabletOrSmaller ? "55" : "100"}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default AmazonModal;
