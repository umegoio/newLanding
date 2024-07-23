import { Box } from "@mui/material";
import React from "react";

const AboutUsLayout = ({ left, right }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: "" },
        }}
      >
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
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
            width: "100%",
          }}
        >
          {right()}
        </Box>
      </Box>
    </>
  );
};

export default AboutUsLayout;
