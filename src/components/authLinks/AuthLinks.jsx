"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link href="/write" className={styles.link}>
            write
          </Link>
          <span className={styles.link} onClick={signOut}>
            logout
          </span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          login
        </Link>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "authenticated" ? (
            <>
              <Link href="/write">write</Link>
              <span className={styles.link}>logout</span>
            </>
          ) : (
            <Link href="/login">login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
