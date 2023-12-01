import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AboutUsLayout from "./AboutUsLayout";
import party from "../../assets/party.png";

const left = () => {
  return (
    <>
      <Box>
        <Typography
          variant="body2"
          fontWeight="560"
          component="span"
          sx={{
            background: "#F8F2FE",
            borderRadius: "20px",
            padding: "10px 20px",
          }}
        >
          Who We Are
        </Typography>

        <Typography variant="h4" fontWeight="bold" mt={4}>
          About Us
        </Typography>

        <Typography variant="body1" mt={2}>
          On the Umego adventure, we{"'"}re reimagining the art of connection!
          Dive into a world where digital meets personal, where every click
          leads to a handshake, and shared experiences ignite enduring bonds.
          Our platform is more than just a space—it{"'"}s a vibrant community
          teeming with life, inviting you to create deep connections and embrace
          the joy of togetherness. Join us in shaping a world where every
          interaction is a chance for magic, and each moment a step towards a
          richer, more connected life.
        </Typography>
      </Box>
    </>
  );
};

const right = () => {
  return (
    <>
      <Image src={party} alt="party" height={300} />
    </>
  );
};

const AboutUs = () => {
  return (
    <>
      <Box mt={{ xs: 7, md: 14 }} px={8}>
        <AboutUsLayout left={left} right={right} />
      </Box>
    </>
  );
};

export default AboutUs;
