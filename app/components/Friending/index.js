import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import friending from "../../assets/friending.png";
import ContentLayout from "../ContentLayout";
import Image from "next/image";
import ComputerIcon from "@mui/icons-material/Computer";
import PeopleIcon from "@mui/icons-material/People";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const Frinding = () => {
  return (
    <>
      <ContentLayout
        title="Friending"
        titleContent="Discover the thrill of friendship with Umego! Our Friending feature turns online matches into real-world connections, fueled by shared passions and curated experiences. Dive into a world of authentic bonds over coffee chats, art explorations, or trail adventures. With Umego, every encounter is a step towards lifelong friendships and unforgettable memories."
      >
        <Stack
          sx={{
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <Image alt="friending" src={friending} height={700} />
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#fff",
              boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
              height: "100px",
              width: "300px",
              overflow: "hidden",
              boxSizing: "content-box",
              padding: "14px",
              borderRadius: "20px",
              gap: 1,
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translate(0,-50%)",
            }}
          >
            <ComputerIcon
              sx={{
                color: "#4245E4",
                mt: 0.4,
              }}
            />
            <Typography variant="h6" component="div" letterSpacing={1.2}>
              Share your activity plans and invite others to join the fun.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "#fff",
              boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
              width: "300px",
              overflow: "hidden",
              boxSizing: "content-box",
              padding: "14px",
              borderRadius: "20px",
              gap: 1,
              position: "absolute",
              top: "0",
              right: "0",
            }}
          >
            <PeopleIcon
              sx={{
                color: "#4245E4",
                mt: 0.4,
              }}
            />
            <Typography variant="h6" component="div" letterSpacing={1.2}>
              Discover and connect with like-minded people
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "#fff",
              boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
              height: "100px",
              width: "300px",
              overflow: "hidden",
              boxSizing: "content-box",
              padding: "14px",
              borderRadius: "20px",
              gap: 1,
              position: "absolute",
              bottom: "0",
              right: "80px",
            }}
          >
            <LocalLibraryIcon
              sx={{
                color: "#4245E4",
                mt: 0.4,
              }}
            />
            <Typography variant="h6" component="div" letterSpacing={1.2}>
              Spot exciting activities shared by users and jump in!
            </Typography>
          </Box>
        </Stack>
      </ContentLayout>
    </>
  );
};

export default Frinding;
