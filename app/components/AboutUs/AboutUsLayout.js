import { Box } from "@mui/material";
import React from "react";

const AboutUsLayout = ({ left, right }) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {left()}
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {right()}
        </Box>
      </Box>
    </>
  );
};

export default AboutUsLayout;
