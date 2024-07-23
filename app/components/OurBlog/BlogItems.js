"use client";
import { Stack } from "@mui/material";
import React from "react";
import BlogItem1 from "../../assets/BlogItem1.png";
import BlogItem2 from "../../assets/BlogItem2.png";
import BlogItem3 from "../../assets/BlogItem3.png";
import BlogItem from "./BlogItem";

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

export default BlogItems;
