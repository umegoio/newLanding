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
          mt: { xs: 7, md: 10 },
        }}
      >
        <Typography variant="body1" color="white">
          @ 2023 Umego Limited. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default index;
