"use client";

import React, { useState } from "react";

type Props = {};

const FACULTIES: { code: string; label: string }[] = [
  { code: "02", label: "คณะวิทยาศาสตร์" },
  { code: "03", label: "คณะเกษตรศาสตร์" },
  { code: "04", label: "คณะวิศวกรรมศาสตร์" },
  { code: "05", label: "คณะศึกษาศาสตร์" },
  { code: "06", label: "คณะพยาบาลศาสตร์" },
  { code: "07", label: "คณะแพทยศาสตร์" },
  { code: "08", label: "คณะมนุษยศาสตร์และสังคมศาสตร์" },
  { code: "09", label: "คณะเทคนิคการแพทย์" },
  { code: "10", label: "บัณฑิตวิทยาลัย" },
  { code: "11", label: "คณะสาธารณสุขศาสตร์" },
  { code: "13", label: "คณะทันตแพทยศาสตร์" },
  { code: "15", label: "คณะเภสัชศาสตร์" },
  { code: "16", label: "คณะเทคโนโลยี" },
  { code: "18", label: "คณะสัตวแพทยศาสตร์" },
  { code: "20", label: "คณะสถาปัตยกรรมศาสตร์" },
  { code: "21", label: "คณะบริหารธุรกิจและการบัญชี" },
  { code: "22", label: "คณะศิลปกรรมศาสตร์" },
  { code: "23", label: "คณะสหวิทยาการ" },
  { code: "27", label: "คณะนิติศาสตร์" },
  { code: "28", label: "วิทยาลัยการปกครองท้องถิ่น" },
  { code: "29", label: "วิทยาลัยนานาชาติ" },
  { code: "32", label: "คณะเศรษฐศาสตร์" },
  { code: "38", label: "วิทยาลัยการคอมพิวเตอร์" },
  { code: "74", label: "วิทยาลัยบัณฑิตศึกษาการจัดการ" },
];

const Registration = (props: Props) => {
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

  const handleChangeStudentCode = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // setStudentCode(e.target.value);
    // console.log(e.target.value);
    const student_code = e.target.value;
    const faculty_code_from_student_code = student_code.substring(3, 5);
    const faculty = FACULTIES.find(
      (value, index, obj) => value.code === faculty_code_from_student_code
    );
    console.log(faculty);
    if (faculty) {
      setFaculty(faculty.label);
    }
  };

  return (
    <>
      <Stack
        sx={{
          pt: 4,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "32px",
            }}
          >
            Registration
          </Typography>
          <Stack
            spacing={2}
            sx={{
              mt: 4,
            }}
          >
            <Typography
              sx={{
                textAlign: "start",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              Select your ticket type
            </Typography>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
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
                      }}
                    >
                      เพื่อนใหม่ KKU61
                    </Typography>
                    {/* <Chip size="small" label="SOLD OUT" color="error" /> */}
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
                    <Typography>200/1500</Typography>
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
                      นักศึกษาปัจจุบัน/ศิษย์เก่า
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
                    <Typography>เต็มแล้ว</Typography>
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
          </Stack>
          <Stack
            spacing={2}
            sx={{
              mt: 4,
            }}
          >
            <Typography
              sx={{
                textAlign: "start",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Student Info
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={gilad}
                  onChange={handleChangeGilad}
                  name="gilad"
                />
              }
              label="มีรหัสนักศึกษาหรือไม่ ?"
            />
            <TextField
              label="รหัสนักศึกษา"
              variant="outlined"
              size="small"
              onChange={(e) => handleChangeStudentCode(e)}
            />
            <TextField label="ชื่อ-นามสกุล" variant="outlined" size="small" />
            <TextField label="ชื่อเล่น" variant="outlined" size="small" />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">คณะ</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={faculty}
                label="คณะ"
                onChange={handleChangeFaculty}
                size="small"
                disabled={false}
              >
                {FACULTIES.map((value, index, array) => {
                  return (
                    <MenuItem key={index} value={value.label}>
                      {value.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField label="ศาสนา" variant="outlined" size="small" />
            <TextField
              label="อาหารที่รับประทาน"
              variant="outlined"
              size="small"
            />
            <TextField label="อาหารที่แพ้" variant="outlined" size="small" />
            <TextField label="ยาที่แพ้" variant="outlined" size="small" />
            <TextField label="โรคประจำตัว" variant="outlined" size="small" />
            <TextField label="เบอร์โทรศัพท์" variant="outlined" size="small" />
            <TextField
              label="เบอร์เพื่อนที่สามารถติดต่อได้"
              variant="outlined"
              size="small"
            />
            <TextField label="facebook" variant="outlined" size="small" />
            <TextField label="instagram" variant="outlined" size="small" />
          </Stack>
          <Stack
            spacing={2}
            sx={{
              mt: 4,
            }}
          >
            <Typography
              sx={{
                textAlign: "start",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Select Event
            </Typography>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Registration;

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
import { blue, grey } from "@mui/material/colors";
