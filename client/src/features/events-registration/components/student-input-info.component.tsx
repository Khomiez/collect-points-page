"use client";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  FormControl,
  FormControlLabel,
  InputBase,
  InputLabel,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { useState } from "react";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { StudentStateInterface } from "@/shared/models";

type Props = StudentStateInterface;

export const StudentInputInfoComponent = (props: Props) => {
  const [isCheckInPersonEvent, setIsCheckInPersonEvent] =
    useState<boolean>(false);
  const [isCheckVirtual, setIsCheckVirtual] = useState<boolean>(false);

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? grey[50] : "#1A2027",
      border: "1px solid",
      borderColor: theme.palette.mode === "light" ? grey[300] : "#2D3843",
      fontSize: 16,
      // width: "auto",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  return (
    <>
      <Stack
        sx={{
          pb: 8,
        }}
      >
        {/* GO BACK */}
        <Stack
          sx={{
            mt: 2,
          }}
        >
          <Container>
            <Button startIcon={<KeyboardBackspaceIcon />} size="small">
              Go Back
            </Button>
          </Container>
        </Stack>
        {/* JOIN US */}
        <Stack
          sx={{
            mt: 2, // 2 x 8px = "16"
          }}
        >
          <Container>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 600,
                // letterSpacing: "-1.28px",
                lineHeight: "32px",
              }}
            >
              Join us live in NYC or watch virtually
            </Typography>
          </Container>
        </Stack>
        {/* ALREADY */}
        <Stack
          sx={{
            mt: 1,
          }}
        >
          <Container>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,

                  color: grey[600],
                }}
              >
                ALREADY REGISTERED?
              </Typography>
              <Button>LOG IN</Button>
            </Stack>
          </Container>
        </Stack>
        {/* 1 */}
        <Stack
          sx={{
            mt: 4,
          }}
        >
          <Container>
            <Box
              sx={{
                backgroundColor: "black",
                color: "white",
                width: "32px",
                height: "20px",

                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",

                borderRadius: 1,

                fontWeight: 500,
              }}
            >
              1
            </Box>
          </Container>
        </Stack>
        {/* Select */}
        <Stack
          sx={{
            mt: 2,
          }}
        >
          <Container>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 600,
                // letterSpacing: "-1.28px",
                lineHeight: "32px",
              }}
            >
              Select your ticket type
            </Typography>
          </Container>
        </Stack>
        {/* Are you */}
        <Stack
          sx={{
            mt: 2,
          }}
        >
          <Container>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,

                color: grey[600],
              }}
            >
              Are you attending virtually or in-person?
            </Typography>
          </Container>
        </Stack>
        {/* In-person */}
        <Stack
          sx={{
            mt: 4,
            // border: "1px solid black",
            // borderColor: red[500],
          }}
        >
          <Container>
            <Stack spacing={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 2,

                  borderColor: isCheckInPersonEvent ? blue[500] : grey[500],
                  borderWidth: isCheckInPersonEvent ? 2 : 1,
                  borderStyle: "solid",

                  px: isCheckInPersonEvent ? 1.875 : 2,
                  py: isCheckInPersonEvent ? 1.875 : 2,
                  borderRadius: 3,

                  // backgroundColor: isCheckInPersonEvent ? blue[50] : "white",
                }}
                onClick={() => setIsCheckInPersonEvent((prev) => !prev)}
              >
                <Stack
                  sx={
                    {
                      // border: "1px solid black",
                      // borderColor: orange[500],
                    }
                  }
                  direction="row"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      In-person
                    </Typography>
                    <Chip label="SOLD OUT" color="error" size="small" />
                  </Stack>
                  <Typography
                    sx={{
                      backgroundColor: grey[200],
                      px: 1,
                      py: 0.125,

                      borderRadius: 1,
                    }}
                  >
                    $500.00
                  </Typography>
                </Stack>
                <Stack
                  sx={
                    {
                      // border: "1px solid black",
                      // borderColor: orange[500],
                    }
                  }
                >
                  225 Liberty Street, New York, NY
                </Stack>
              </Box>
              <Stack
                sx={{
                  border: "1px solid black",
                  borderColor: grey[500],

                  px: 2,
                  py: 2,

                  borderRadius: 3,
                }}
                spacing={2}
              >
                <Stack
                  sx={
                    {
                      // border: "1px solid black",
                      // borderColor: orange[500],
                    }
                  }
                  direction="row"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      Virtual
                    </Typography>
                    {/* <Chip label="SOLD OUT" color="error" size="small" /> */}
                  </Stack>
                  <Typography
                    sx={{
                      backgroundColor: grey[200],
                      px: 1,
                      py: 0.125,

                      borderRadius: 1,
                    }}
                  >
                    Free
                  </Typography>
                </Stack>
                <Stack
                  sx={
                    {
                      // border: "1px solid black",
                      // borderColor: orange[500],
                    }
                  }
                >
                  Online livestreamed keynote
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Stack>
        {/* Checkbox */}
        <Stack
          sx={{
            mt: 2,
          }}
        >
          <Container>
            <Stack>
              <FormControlLabel
                control={<Checkbox />}
                label="I'd like to be added to the in-person waitlist."
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I have a VIP code"
              />
            </Stack>
          </Container>
        </Stack>
        {/* 2 */}
        <Stack
          sx={{
            mt: 6,
          }}
        >
          <Container>
            <Box
              sx={{
                backgroundColor: "black",
                color: "white",
                width: "32px",
                height: "20px",

                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",

                borderRadius: 1,

                fontWeight: 500,
              }}
            >
              2
            </Box>
          </Container>
        </Stack>
        {/* Complete */}
        <Stack
          sx={{
            mt: 2,
          }}
        >
          <Container>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 600,
                // letterSpacing: "-1.28px",
                lineHeight: "32px",
              }}
            >
              Complete your information
            </Typography>
          </Container>
        </Stack>
        {/* Privacy */}
        <Stack
          sx={{
            mt: 1,
          }}
        >
          <Container>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,

                color: grey[600],

                display: "inline",
              }}
            >
              Please enter your details to attend Vercel Ship virtually. By
              entering your information, you acknowledge you have read our
            </Typography>
            <Button
              size="small"
              sx={{
                flexWrap: "nowrap",
                textWrap: "nowrap",
                display: "inline",
              }}
            >
              PRIVACY POLICY
            </Button>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,

                color: grey[600],

                display: "inline",
              }}
            >
              .
            </Typography>
          </Container>
        </Stack>
        {/* Input */}
        <Stack
          sx={{
            mt: 2,
          }}
        >
          <Container>
            <Stack spacing={2}>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input">
                  First Name
                </InputLabel>
                <BootstrapInput
                  // defaultValue="react-bootstrap"
                  id="bootstrap-input"
                  placeholder="John"
                  onChange={(e) => {
                    props.setSTD_first_name_th(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input">
                  Last Name
                </InputLabel>
                <BootstrapInput
                  // defaultValue="react-bootstrap"
                  id="bootstrap-input"
                  placeholder="Doe"
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input">
                  Business Email
                </InputLabel>
                <BootstrapInput
                  // defaultValue="react-bootstrap"
                  id="bootstrap-input"
                  placeholder="johndoe@acme.com"
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input">
                  Company Website
                </InputLabel>
                <BootstrapInput
                  // defaultValue="react-bootstrap"
                  id="bootstrap-input"
                  placeholder="acme.com"
                />
              </FormControl>
            </Stack>
          </Container>
        </Stack>
        {/* Get your */}
        <Stack
          sx={{
            mt: 4,
          }}
        >
          <Container>
            <Button variant="contained" fullWidth disableElevation>
              GET YOUR TICKET{" "}
              <Typography
                sx={{
                  ml: 1,
                  color: grey[50],
                }}
              >
                FREE
              </Typography>
            </Button>
          </Container>
        </Stack>
        {/* By submitting */}
        <Stack
          sx={{
            mt: 1,
          }}
        >
          <Container>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,

                color: grey[600],

                display: "inline",
              }}
            >
              BY SUBMITTING THE FORM, YOU AGREE TO OUR
            </Typography>
            <Button
              size="small"
              sx={{
                flexWrap: "nowrap",
                textWrap: "nowrap",
                display: "inline",

                fontSize: "12px",

                px: 0,
                py: 0,

                minHeight: 0,
                minWidth: 0,
              }}
            >
              EVENT TERMS AND CONDITIONS
            </Button>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,

                color: grey[600],

                display: "inline",
              }}
            >
              .
            </Typography>
          </Container>
        </Stack>
      </Stack>
    </>
  );
};
