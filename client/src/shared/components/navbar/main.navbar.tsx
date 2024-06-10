"use client";

import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {};

export const MainNavBar = (props: Props) => {
  const router = useRouter();

  return (
    <>
      {/* <Container
        sx={{
          backgroundColor: "hsla(0,0%,100%,.95)",

          backdropFilter: "saturate(180%) blur(5px)",
          boxShadow: "none",
          border: "1px solid #eaeaea",
        }}
      >
        <Stack direction="row" justifyContent="space-around">
          <Link
            href="/events-registration"
            style={{
              flexGrow: 1,
            }}
          >
            <Button fullWidth sx={{ py: 2 }}>
              ลงทะเบียน
            </Button>
          </Link>
          <Link
            href="/collect-points"
            style={{
              flexGrow: 1,
            }}
          >
            <Button fullWidth sx={{ py: 2 }}>
              สะสมแต้ม
            </Button>
          </Link>
        </Stack>
      </Container> */}
      <Stack
        sx={{
          position: "sticky",
          top: 0,

          zIndex: 1100,
        }}
      >
        <Container
          sx={{
            backgroundColor: "hsla(0,0%,100%,.95)",

            backdropFilter: "saturate(180%) blur(5px)",
            boxShadow: "none",
            border: "1px solid #eaeaea",

            py: 1.5,
          }}
        >
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button size="small" onClick={() => router.push("/")}>
              <Typography>Home</Typography>
            </Button>
            <Button
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              disableElevation
              size="small"
              onClick={() => router.push("/events-registration")}
              sx={{
                minWidth: 0,
                minHeight: 0,
                px: 1.5,
                py: 0,
                height: 30,
                borderRadius: 1,
              }}
            >
              Tickets
            </Button>
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
} from "@mui/material";
import Link from "next/link";
import { blue, deepOrange } from "@mui/material/colors";
import { useRouter } from "next/navigation";
