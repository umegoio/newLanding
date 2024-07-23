import { Box, Typography } from "@mui/material";
import React from "react";

const ContentLayout = ({ title, titleContent, children }) => {
  return (
    <>
      <Box sx={{ mt: { xs: 6, sm: 7, lg: 14 } }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          {title}
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          mt={1}
          sx={{ px: { xs: 0, sm: 4, md: 10 } }}
        >
          {titleContent}
        </Typography>
        <Box mt={{ xs: 4, sm: 5 }}>{children}</Box>
      </Box>
    </>
  );
};

export default ContentLayout;
