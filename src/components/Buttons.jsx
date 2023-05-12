import React from "react";

import {Button} from "@mui/material"

function Buttons (props) {
  return (
    <div>
      <Button 
        onClick={props.function}
        variant="contained" 
        color={props.title == "sim" ? "success" : "error"} 
        size="large"
        sx={{
          width: 100,
          fontWeight: 600,
          position: props.position,
          top: props.top,
          left: props.left
        }}
      >
        {props.title}
      </Button>
    </div>
  )
}

export default Buttons


