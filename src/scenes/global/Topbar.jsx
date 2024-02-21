import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import AddWidgetWindow from "./widget"; // Assuming "widget.js" is in the same directory

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);

  const handleAddWidgetClick = () => {
    setIsAddWidgetOpen(true);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2} >
      <Box display="flex">
        <IconButton>
          <HomeIcon />
        </IconButton>
        <Button variant="outlined" color="secondary" size="medium" style={{ marginRight: "8px" }}>
          Overview
        </Button>
        <Button variant="outlined" color="secondary" size="medium" style={{ marginRight: "8px" }}>
          Customers
        </Button>
        <Button variant="outlined" color="secondary" size="medium" style={{ marginRight: "8px" }}>
          Products
        </Button>
        <Button variant="outlined" color="secondary" size="medium" style={{ marginRight: "8px" }}>
          Orders
        </Button>
        {/* Add more buttons as needed */}
      </Box>
      <Box display="flex">
        <Button variant="outlined" color="secondary" onClick={handleAddWidgetClick} startIcon={<AddIcon />}>
          Add Widget
        </Button>
        {isAddWidgetOpen && <AddWidgetWindow onClose={() => setIsAddWidgetOpen(false)} />}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
