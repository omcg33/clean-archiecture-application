import React from "react";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';

export const Header = (props: any) => {
  return (
    <Paper {...props} elevation={3} component="header">
       <Typography variant="h3" component="div" align="center">
        HEADER
      </Typography>
    </Paper>
  )
}