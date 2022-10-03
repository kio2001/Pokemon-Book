/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
 
const App: React.FC = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "red",
        "&:hover": {
          backgroundColor: "red",
        },
      }}
    >
      ボタン
    </Button>
  );
};
 
export default App;