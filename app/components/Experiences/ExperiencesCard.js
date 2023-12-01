import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ExperiencesCard = ({ img, title, country }) => {
  return (
    <>
      <Box>
        <Box>
          <Image src={img} alt={title} height={550} />
        </Box>
        <Typography variant="h5" fontWeight={"bold"} mt={1}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "#787878" }} mt={0.5}>
          {country}
        </Typography>
      </Box>
    </>
  );
};

export default ExperiencesCard;
