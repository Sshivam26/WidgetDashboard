// WidgetButton.js
import React from "react";
import { Button } from "@mui/material";

const WidgetButton = ({ label, onClick }) => {
  return (
    <Button
    variant="outlined"
    onClick={onClick}
    sx={{
      marginRight: 2,
      color: "gray",
      borderColor: "gray",
      "&:hover": {
        borderColor: "#5e5adb",
        color: "#5e5adb",
      },
      width: "100%", // Make buttons take full width
      padding: "12px", // Increase the size of the inner text
    }}
  >
    {label}
  </Button>
  );
};

export default WidgetButton;
