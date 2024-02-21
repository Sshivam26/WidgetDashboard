// WidgetView.js
import React, { useState } from "react";
import { Box, Zoom } from "@mui/material";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { grey } from "@mui/material/colors";

const WidgetView = ({ selectedWidget }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.2);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => Math.max(0.1, prevZoomLevel - 0.2));
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "350px",
          width:"600px",
          background:"#ffffff",
          borderRadius: 3,
          marginTop:'18px',
          marginRight: "8px", // Adjust the margin as needed
          transform: `scale(${zoomLevel})`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {selectedWidget}
      </Box>
      <Box sx={{ position: "absolute", top: "35px", right: "35px" }}>
        <Zoom in={zoomLevel < 2} onClick={handleZoomIn}>
          <span><ZoomInIcon fontSize="large"/></span>
        </Zoom>
        <Zoom in={zoomLevel > 0.2} onClick={handleZoomOut}>
          <span><ZoomOutIcon fontSize="large"/></span>
        </Zoom>
      </Box>
    </Box>
  );
};

export default WidgetView;
