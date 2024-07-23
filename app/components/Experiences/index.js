import { Box, Typography } from "@mui/material";
import React from "react";
import ExperiencesCard from "./ExperiencesCard";
import experienceImage1 from "../../assets/experienceImage1.png";
import experienceImage2 from "../../assets/experienceImage2.png";
import experienceImage3 from "../../assets/experienceImage3.png";
import ContentLayout from "../ContentLayout";

const index = () => {
  return (
    <>
      <ContentLayout
        title="Experiences"
        titleContent="Dive into Umego's world of extraordinary activities, where our AI,
          attuned to your feelings and preferences, guides you. From classic
          activities like dining and spa visits to trendy options such as
          learning new art and craft skills, each experience is meticulously
          selected for unparalleled quality and enjoyment. Get ready to
          transform ordinary days into unforgettable adventures that resonate
          with your emotions and interests!"
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 4, md: 3, xl: 4 },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <ExperiencesCard
            img={experienceImage1}
            title="Hot Air Balloon Flight"
            country={"Australia"}
          />
          <ExperiencesCard
            img={experienceImage2}
            title="Adventure Cove Waterpark"
            country="Singapore"
          />
          <ExperiencesCard
            img={experienceImage3}
            title="Desert Buggy Experience"
            country="United Arab Emirates"
          />
        </Box>
      </ContentLayout>
    </>
  );
};

export default index;
