import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import ContentLayout from "../ContentLayout";
import blogImage from "../../assets/blogImage.png";
import BlogItems from "./BlogItems";

const index = () => {
  return (
    <>
      <Box mt={{ xs: 14, md: 0 }} />
      <ContentLayout
        title="Our Blog"
        titleContent="Explore our blog where curiosity meets insight—your go-to source for inspiring stories, expert tips, and a fresh take on the hobbies and interests that bring us all together."
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: { xs: 4, md: 8 },
            px: { xs: 0, sm: 4, md: 8 },
            gap: { md: 6 },
          }}
        >
          <Stack flex={1} sx={{ alignItems: "center" }}>
            <Box mb={3} sx={{ alignSelf: "center" }}>
              <Image src={blogImage} alt="blogImage" height={600} />
            </Box>
          </Stack>
          <Stack flex={1} mt={{ xs: 4, md: 0 }}>
            <BlogItems />
          </Stack>
        </Box>
      </ContentLayout>
    </>
  );
};

export default index;
