"use client";

import React, { useEffect, useState } from "react";

type Props = {};

const Registration = (props: Props) => {
  // const [std_registration_timestamp, setSTD_registration_timestamp] =
  //   useState<Date | null>(null);
  const [std_code, setSTD_code] = useState<string | null>(null);
  // const [std_prefix_name, setSTD_prefix_name] = useState<string | null>(null);
  const [std_first_name_th, setSTD_first_name_th] = useState<string | null>(
    null
  );
  const [std_last_name_th, setSTD_last_name_th] = useState<string | null>(null);
  const [std_nickname, setSTD_nickname] = useState<string | null>(null);
  // const [std_prefix, setSTD_prefix] = useState<string | null>(null);
  // const [std_first_name, setSTD_first_name] = useState<string | null>(null);
  // const [std_last_name, setSTD_last_name] = useState<string | null>(null);
  const [std_faculty_name, setSTD_faculty_name] = useState<string | null>(null);
  const [std_faculty_name_eng, setSTD_faculty_name_eng] = useState<
    string | null
  >(null);
  const [std_religion, setSTD_religion] = useState<string | null>(null);
  const [std_religion_eng, setSTD_religion_eng] = useState<string | null>(null);
  const [std_food_type, setSTD_food_type] = useState<string | null>(null);
  const [std_food_allergy, setSTD_food_allergy] = useState<
    FoodAllergyType[] | null
  >(null);
  const [std_drug_allergy, setSTD_drug_allergy] = useState<
    DrugAllergyType[] | null
  >(null);
  const [std_underlying_disease, setSTD_underlying_disease] = useState<
    string[] | null
  >(null);
  const [std_telephone, setSTD_telephone] = useState<string | null>(null);
  const [std_friend_telephone, setSTD_friend_telephone] = useState<
    string | null
  >(null);
  const [std_facebook, setSTD_facebook] = useState<string | null>(null);
  const [std_instagram, setSTD_instagram] = useState<string | null>(null);
  const [std_role, setSTD_role] = useState<StudentRoleType | null>(null);

  const [isShowForNew_student, setIsShowForNew_student] =
    useState<boolean>(false);

  const handleSelectStudentRoles = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let get_std_role: StudentRoleType = e.target
      .value as unknown as StudentRoleType;

    setSTD_role(get_std_role);
  };

  useEffect(() => {
    console.log(std_role);
  }, [std_role]);

  return (
    <main>
      {/* <StudentInputInfoComponent /> */}
      {/* ประเภท */}
      <Stack
        sx={{
          mt: 4,
        }}
      >
        <Container>
          <Stack>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">ประเภท</FormLabel>
              <RadioGroup
                value={std_role}
                onChange={(e) => handleSelectStudentRoles(e)}
              >
                <FormControlLabel
                  value="new_student"
                  control={<Radio />}
                  label="new_student"
                />
                <FormControlLabel
                  value="current_student"
                  control={<Radio />}
                  label="current_student"
                />
                <FormControlLabel
                  value="alumni"
                  control={<Radio />}
                  label="alumni"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
        </Container>
      </Stack>
      {/*  */}
      {std_role && (
        <Stack
          sx={{
            mt: 4,
          }}
        >
          <Container>
            <Typography>กรอกข้อมูล</Typography>
            <Stack
              spacing={2}
              sx={{
                mt: 2,
              }}
            >
              {(std_role === "new_student" ||
                std_role === "current_student") && (
                <TextField
                  id="outlined-basic"
                  label="std_code"
                  variant="outlined"
                />
              )}

              <TextField
                id="outlined-basic"
                label="std_first_name_th"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="std_last_name_th"
                variant="outlined"
              />
              {std_role === "new_student" && (
                <TextField
                  id="outlined-basic"
                  label="std_nickname"
                  variant="outlined"
                />
              )}

              <TextField
                id="outlined-basic"
                label="std_faculty_name"
                variant="outlined"
              />
            </Stack>
          </Container>
        </Stack>
      )}
    </main>
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
import {
  amber,
  blue,
  blueGrey,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from "@mui/material/colors";
import { StudentInputInfoComponent } from "@/features/events-registration/components";
import {
  DrugAllergyType,
  FoodAllergyType,
  StudentRoleType,
} from "@/shared/models";
