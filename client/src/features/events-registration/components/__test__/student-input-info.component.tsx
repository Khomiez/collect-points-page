"use client";

import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type Props = {};

export const StudentInputInfoComponent = (props: Props) => {
  const [isCheckInPersonEvent, setIsCheckInPersonEvent] =
    useState<boolean>(false);
  const [isCheckVirtual, setIsCheckVirtual] = useState<boolean>(false);

  const [gilad, setGilad] = useState<boolean>(true);
  const [faculty, setFaculty] = useState("");
  const [studentCode, setStudentCode] = useState("");

  const handleChangeGilad = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGilad((prev) => !prev);
  };

  const handleChangeFaculty = (event: SelectChangeEvent) => {
    setFaculty(event.target.value as string);
  };

  return (
    <>
      <Stack>
        <Container
          sx={{
            mt: 2,
          }}
        >
          <Stack>
            <Box>
              <Button startIcon={<KeyboardBackspaceIcon />}>Go Back</Button>
            </Box>
          </Stack>
          <Stack
            sx={{
              mt: 2,
            }}
          >
            <Typography fontSize={"32px"} fontWeight={500} lineHeight={1}>
              Join us live in NYC or watch virtually
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              mt: 2,
            }}
            alignItems="center"
          >
            <Typography
              fontSize={"14px"}
              fontWeight={400}
              lineHeight={1}
              sx={{ color: grey[600] }}
            >
              ALREADY REGISTERED?
            </Typography>
            <Button size="small">LOG IN</Button>
          </Stack>
          <Stack
            sx={{
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
                color: "white",
                width: 36,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderRadius: 1.5,

                fontWeight: 500,
              }}
            >
              1
            </Box>
          </Stack>
          <Stack
            sx={{
              mt: 2,
            }}
          >
            <Typography fontSize={"32px"} fontWeight={500} lineHeight={1}>
              Select your ticket type
            </Typography>
          </Stack>
          <Stack
            sx={{
              mt: 2,
            }}
          >
            <Typography
              fontSize={"14px"}
              fontWeight={400}
              lineHeight={1}
              sx={{ color: grey[600] }}
            >
              Are you attending virtually or in-person?
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{
              mt: 4,
            }}
          >
            <Stack
              sx={{
                borderWidth: isCheckInPersonEvent ? "2px" : "1px",
                borderStyle: "solid",

                boxSizing: "content-box",

                borderColor: isCheckInPersonEvent ? blue[600] : grey[300],
                py: isCheckInPersonEvent ? 0.875 : 1,
                px: isCheckInPersonEvent ? 1.875 : 2,
                borderRadius: 2,

                backgroundColor: isCheckInPersonEvent ? blue[50] : "white",
              }}
              onClick={() => {
                setIsCheckInPersonEvent((prev) => !prev);
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                  py: 1,
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,

                      textDecoration: "line-through",
                    }}
                  >
                    In-person
                  </Typography>
                  <Chip
                    size="small"
                    label="SOLD OUT"
                    color="error"
                    sx={{
                      borderRadius: 2,
                    }}
                  />
                </Stack>
                <Box
                  sx={{
                    backgroundColor: isCheckInPersonEvent
                      ? grey[50]
                      : grey[200],
                    px: 1,
                    py: 0.5,
                    borderRadius: 2,
                  }}
                >
                  <Typography>$500.00</Typography>
                </Box>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  py: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  225 Liberty Street, New York, NY
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                borderWidth: isCheckVirtual ? "2px" : "1px",
                borderStyle: "solid",

                boxSizing: "content-box",

                borderColor: isCheckVirtual ? blue[600] : grey[300],
                py: isCheckVirtual ? 0.875 : 1,
                px: isCheckVirtual ? 1.875 : 2,
                borderRadius: 2,

                backgroundColor: isCheckVirtual ? blue[50] : "white",

                // opacity: 0.3,
              }}
              onClick={() => {
                setIsCheckVirtual((prev) => !prev);
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                  py: 1,
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    Virtual
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    backgroundColor: isCheckVirtual ? grey[50] : grey[200],
                    px: 1,
                    py: 0.5,
                    borderRadius: 2,
                  }}
                >
                  <Typography>Free</Typography>
                </Box>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  py: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Online livestreamed keynote
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              mt: 2,
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="I'd like to be added to the in-person waitlist."
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I have a VIP code"
            />
          </Stack>
          <Stack
            sx={{
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
                color: "white",
                width: 36,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderRadius: 1.5,

                fontWeight: 500,
              }}
            >
              2
            </Box>
          </Stack>
          <Stack
            sx={{
              mt: 2,
            }}
          >
            <Typography fontSize={"32px"} fontWeight={500} lineHeight={1}>
              Complete your information
            </Typography>
          </Stack>
          <Stack
            direction="column"
            sx={{
              mt: 4,
            }}
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  AppBar,
  Autocomplete,
  Avatar,
  AvatarGroup,
  Backdrop,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  ButtonBase,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Chip,
  CircularProgress,
  ClickAwayListener,
  Collapse,
  Container,
  CssBaseline,
  darkScrollbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  Fab,
  Fade,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Unstable_Grid2,
  Grow,
  Hidden,
  Icon,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  MenuList,
  MobileStepper,
  Modal,
  NativeSelect,
  NoSsr,
  OutlinedInput,
  Pagination,
  PaginationItem,
  Paper,
  Popover,
  Popper,
  Portal,
  Radio,
  RadioGroup,
  Rating,
  ScopedCssBaseline,
  Select,
  Skeleton,
  Slide,
  Slider,
  Snackbar,
  SnackbarContent,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Step,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  SvgIcon,
  SwipeableDrawer,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tabs,
  TabScrollButton,
  TextField,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  Zoom,
  useAutocomplete,
  GlobalStyles,
  generateUtilityClass,
  generateUtilityClasses,
  Unstable_TrapFocus,
  SelectChangeEvent,
} from "@mui/material";
import Link from "next/link";
import { blue, deepOrange, grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";
