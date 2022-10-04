/** @jsxImportSource @emotion/react */
import React from "react";
import {
  autocompleteClasses,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { grey, teal } from "@mui/material/colors";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export const Login = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Paper
        elevation={5}
        sx={{
          p: 5,
          height: "100vh",
          width: "280px",
          margin: "20px auto",
        }}
      >
        <Avatar
          sx={{
            mb: "30px",
            mr: "auto",
            ml: "auto",
            bgcolor: grey[500],
          }}
        >
          <LockIcon />
        </Avatar>
        <Typography
          sx={{
            mb: "20px",
            pl: "106px",
          }}
          variant="h5"
          component="h2"
        >
          Log In
        </Typography>

        <TextField
          type="username"
          label="username"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          required
        ><VisibilityOffIcon/></TextField>
        <Grid item xs={8}>
          <Button
            sx={{
              m: "20px auto",
            }}
            variant="contained"
            href="#contained-buttons"
          >
            ログイン
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Login;
