import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import phone from "../../assets/phone.png";
import icon1 from "../../assets/icon1.png";

const ContactForm = () => {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
          borderRadius: "20px",
          mt: { md: 10 },
          flexDirection: { xs: "column", md: "row" },
          position: "relative",
          px: 6,
          py: 3,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "-60px",
            right: "20px",
          }}
        >
          <Image src={icon1} alt={"icon1"} height={130} />
        </Box>
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            order: { xs: 1, md: 0 },
          }}
        >
          <Stack sx={{ gap: 3, width: "100%" }}>
            <Box>
              <Typography variant="body2" fontWeight="bold">
                ENTER YOUR EMAIL FOR A CHANCE TO WIN AN
              </Typography>
              <Typography
                variant="h3"
                color="#4548E8"
                fontWeight={"bold"}
                sx={{ mt: 0.5 }}
              >
                iPhone 15 for free
              </Typography>
            </Box>
            <Stack sx={{ gap: 4, mt: 1 }}>
              <TextField
                id="standard-number"
                label={
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="black"
                    sx={{ fontSize: "18px" }}
                  >
                    Name
                  </Typography>
                }
                type="text"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-number"
                label={
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="black"
                    sx={{ fontSize: "18px" }}
                  >
                    Email address *
                  </Typography>
                }
                fullWidth
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />

              <TextField
                id="standard-number"
                label={
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="black"
                    sx={{ fontSize: "18px" }}
                  >
                    Country *
                  </Typography>
                }
                fullWidth
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </Stack>

            <Box>
              <input type="checkbox" />
              <Typography component="span">
                {"  "}I agree to the contest terms and conditions.
              </Typography>
            </Box>

            <Box>
              <Button
                sx={{
                  background: "#4245E4",
                  color: "white",
                  padding: "7px 20px",
                  ":hover": {
                    background: "#4245E4",
                  },
                }}
              >
                Submit -{">"}
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={phone}
            alt="phone"
            height="650"
            width="650"
            style={{ position: "relative", bottom: "30px" }}
          />
        </Box>
      </Stack>
    </>
  );
};

export default ContactForm;
