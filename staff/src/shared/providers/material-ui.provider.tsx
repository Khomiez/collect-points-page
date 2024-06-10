"use client";

import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { Roboto } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export const MaterialUIProvider = ({ children }: Props) => {
  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};
