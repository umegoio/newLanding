"use client";

import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ExperiencesCard = ({ img, title, country }) => {
  const StyledImage = styled(Image)(({ theme }) => ({
    [theme.breakpoints.up("xl")]: {
      objectFit: "fill",
      height: "600px!important",
    },
    [theme.breakpoints.down("lg")]: {
      height: "450px!important",
    },
    [theme.breakpoints.down("md")]: {
      height: "600px!important",
      width: "514px !important",
      objectFit: "fill",
    },
    [theme.breakpoints.down("sm")]: {
      height: "500px!important",
      objectFit: "fill",
      width: "100% !important",
    },
    objectFit: "fill",
    width: "100%",
  }));

  return (
    <>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            width: { xs: "100%", sm: "514px", md: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <StyledImage src={img} alt={title} height={520} />
          <Box sx={{ alignSelf: "flex-start", pl: 1, pr: 5 }}>
            <Typography variant="h5" fontWeight={"bold"} mt={1}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#787878" }} mt={0.5}>
              {country}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ExperiencesCard;
