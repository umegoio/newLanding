import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import BlogItem1 from "../../assets/BlogItem1.png";
import BlogItem2 from "../../assets/BlogItem2.png";
import BlogItem3 from "../../assets/BlogItem3.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const BlogData = [
  {
    img: BlogItem1,
    title:
      "Unlock the Joy: Be a Part of Umego and Start Making Memorable Moments",
    content:
      "Welcome to Umego, the ultimate destination for creating unforgettable memories and forging lasting friendships.",
  },
  {
    img: BlogItem2,
    title: "Friendship 101: The Secrets to Building Lasting Bonds",
    content:
      "Friendship is like a beautiful dance, where two souls come together and create a unique rhythm of connection.",
  },
  {
    img: BlogItem3,
    title: "Community Chronicles: Embrace Your Unique Journey with",
    content:
      "At Umego, we believe that community is more than just a group of people. It’s a place where you can be your.",
  },
];

const BlogItems = () => {
  return (
    <>
      <Stack sx={{ gap: 2 }}>
        {BlogData.map((item) => (
          <BlogItem {...item} key={item.title} />
        ))}
      </Stack>
    </>
  );
};

const BlogItem = ({ img, title, content }) => {
  return (
    <>
      <Stack sx={{ flexDirection: "row", gap: 3 }}>
        <Box>
          <Image src={img} alt={"blog"} height={150} />
        </Box>
        <Stack sx={{ justifyContent: "center" }}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" sx={{ color: "#717171" }}>
            {content}
          </Typography>
        </Stack>
      </Stack>
      <Box style={{ width: "100%", height: "1px", background: "#D9D9D9" }} />
    </>
  );
};

export default BlogItems;
