"use client";
import { setTheme } from "@/redux/features/theme/themeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
