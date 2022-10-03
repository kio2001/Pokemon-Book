import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import {
  createTheme,
  ThemeProvider as MUThemeProvider,
} from "@mui/material/styles";
 
const theme = createTheme();
 
ReactDOM.render(
  <React.StrictMode>
    <MUThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MUThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
 
reportWebVitals();