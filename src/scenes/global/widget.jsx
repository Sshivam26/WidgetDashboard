// AddWidgetWindow.js
import React, { useState } from "react";
import { Button, Box, IconButton, useTheme, Typography, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HistoryIcon from "@mui/icons-material/History";
import { tokens } from "../../theme";
import Top from "./top";
import WidgetView from "./WidgetView";
import WidgetButton from "./WidgetButton";
import Bar from "../bar";
import Line from "../line";
import Pie from "../pie";

const Widget1 = () => <Bar />;
const Widget2 = () => <Line />;
const Widget3 = () => <Pie />;

const AddWidgetWindow = ({ onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedWidget, setSelectedWidget] = useState(null);

  const handleWidgetButtonClick = (widgetComponent) => {
    setSelectedWidget(widgetComponent);
  };

  const handleClose = () => {
    onClose(); // Call the prop to close the window
  };

  return (
    <>
      {/* Dimming overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
          zIndex: 99, // Place it below the AddWidgetWindow
        }}
      />

      {/* AddWidgetWindow */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          width: "60%", // Adjust the width as needed
          backgroundColor: colors.grey[900],
          padding: 5,
          borderRadius: 4,
          boxShadow: 5,
          zIndex: 100,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, marginRight: 2, maxWidth: "600px" }}>
          <Top />
          <WidgetView selectedWidget={selectedWidget} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", width: "1000px" }}>
          <IconButton onClick={handleClose} sx={{ float: "right", marginLeft: 25 }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" sx={{ color: "GrayText", marginLeft: 2 }}>
            COMPONENTS
          </Typography>
          <WidgetButton label="Bar Chart" onClick={() => handleWidgetButtonClick(<Widget1 />)} />
          <WidgetButton label="Line Chart" onClick={() => handleWidgetButtonClick(<Widget2 />)} />
          <WidgetButton label="Pie" onClick={() => handleWidgetButtonClick(<Widget3 />)} />
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2, width: "200px", marginLeft: "10pxpx" }}>
            <Button
              variant="outlined"
              sx={{
                marginRight: 2,
                color: "gray",
                borderColor: "gray",
                "&:hover": {
                  borderColor: "#5e5adb",
                  color: "#5e5adb",
                },
                width: "100%", // Make buttons take full width
                padding: "12px",
              }}
            >
              <HistoryIcon />
            </Button>
            <WidgetButton label="Cancel" onClick={handleClose} />
            <WidgetButton label="Save" sx={{ color: "#5e5adb", borderColor: "#5e5adb" }} variant="outlined" onClick={handleClose} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddWidgetWindow;
