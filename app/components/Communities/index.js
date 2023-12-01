import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ContentLayout from "../ContentLayout";
import communityOne from "../../assets/communityOne.png";
import communityTwo from "../../assets/communityTwo.png";

const index = () => {
  return (
    <>
      <ContentLayout
        title="Communities"
        titleContent="Join our vibrant community, where your interests and hobbies become the foundation for meaningful connections. Whether you're hosting an event, sharing insights, or looking for inspiration, UMEGO ensures you're always in good company. It's more than a community; it's a space where every member contributes to an ever-evolving tapestry of shared experiences and mutual support."
      >
        <Box
          sx={{
            display: "flex",
            px: { xs: 4, md: 8 },
            justifyContent: "center",
            gap: { xs: 14, md: 16 },
            mt: 7,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Stack
            flex={1}
            sx={{
              alignItems: "center",
            }}
          >
            <Box mb={3} sx={{ alignSelf: "flex-start", px: { xs: 0, md: 8 } }}>
              <Typography variant="h4" fontWeight="560">
                Shared Hobbies, <br />
                United
                <br /> Community
              </Typography>
            </Box>
            <Box position="relative">
              <Image src={communityOne} alt="communities" />
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#fff",
                  boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
                  width: "300px",
                  height: "100px",
                  overflow: "hidden",
                  boxSizing: "content-box",
                  padding: "14px 0px",
                  borderRadius: "20px",
                  gap: 1,
                  position: "absolute",
                  right: { md: "-80px" },
                  top: { md: "50%" },
                  bottom: { xs: "-50px", md: "" },
                  left: { xs: "50%", md: "" },
                  transform: { xs: "translate(-50%,0)", md: "" },
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  letterSpacing={1.2}
                  px={3}
                >
                  Lead an event, exchange ideas, or find your next adventure
                  with UMEGO
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Stack flex={1} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                position: "relative",
                background: "red",
                height: "100%",
                width: "100%",
              }}
            >
              <Image
                src={communityTwo}
                alt="communities"
                style={{ height: "700px", width: "100%" }}
              />
              <Box
                sx={{
                  display: "flex",
                  height: "100px",
                  backgroundColor: "#fff",
                  boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
                  width: "300px",
                  overflow: "hidden",
                  boxSizing: "content-box",
                  padding: "14px 0px",
                  borderRadius: "20px",
                  gap: 1,
                  position: "absolute",
                  top: { md: "40px" },
                  left: { xs: "50%", md: "-100px" },
                  bottom: { xs: "-50px", md: "" },
                  transform: { xs: "translate(-50%,0)", md: "" },
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  letterSpacing={1.2}
                  px={3}
                >
                  Dive into a community that turns hobbies into connections
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </ContentLayout>
    </>
  );
};

export default index;
