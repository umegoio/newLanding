import { Box, Typography } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <>
      <Box
        sx={{
          height: "60px",
          background: "#4548E8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, sm: 7, md: 10 },
        }}
      >
        <Typography variant="body1" color="white">
          @ 2024 Umego Limited. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default index;
