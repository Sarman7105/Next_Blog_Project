"use client";
import React, { useEffect, useState } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "@/redux/features/theme/themeSlice";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const handleClick = () => {
    let nextTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(nextTheme));
  };
  return (
    <div
      className={styles.container}
      onClick={handleClick}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={theme === "dark" ? { left: "1px" } : { right: "1px" }}
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
