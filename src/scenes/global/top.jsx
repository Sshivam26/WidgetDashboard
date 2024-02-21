// TopBar.js
import React from "react";
import { Box, Typography, InputBase, IconButton } from "@mui/material";
import WidgetsIcon from '@mui/icons-material/Widgets';
const Top = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
      <WidgetsIcon
      sx={{
        width: '50px', // Increase width
        height: '50px', // Increase height
        fontSize: '24px', // Increase font size
        color: 'rgb(94, 90, 219)', // Set color
        marginRight:'5px',
        marginTop:'8px'
      }}/>
      <Typography variant="h2" sx={{ flexGrow: 1,color: 'rgb(94, 90, 219)' ,fontWeight:'800'}}>
        Create Widget
        <Typography variant="h6" sx={{ flexGrow: 1 ,color:'GrayText' }}>
        manage the glossary of terms of your database
      </Typography>
      </Typography>
      <InputBase
  // placeholder="  Search..."
  // sx={{
  //   marginRight: 2,
  //   marginLeft: 5,
  //   width: 200,
  //   height:30,
  //   border: 1,
  //   my: 2,
  //   borderColor: 'gray',
  //   borderRadius: '6px',
  //   fontSize: 15, // Set desired font size
  //   fontWeight:500,
  //   color: 'black', // Set desired color
  //   backgroundColor: 'white', // Set background color
  // }}
/>

    </Box>
  );
};

export default Top;
