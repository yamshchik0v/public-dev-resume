import React from "react";
import { Avatar, Button } from "@mui/material";
import avatar from "./static/images/avat_128.png";


const WorkingComponent = () => {
  return (
    <>
      <Avatar 
        alt="Me"
        src={avatar}
        sx={{ width: 128, height: 128 }}
       />
      <Button variant="contained" href="https://google.com">
        Go to 
      </Button>
    </>
  );
};

export default WorkingComponent;
