import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="" width={50} height={50} />
          <h1 className={styles.logoText}>Sblog</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          voluptatem et fugit expedita aspernatur molestiae cumque animi, ipsum,
          nisi mollitia est a sapiente voluptate reiciendis eum voluptatum
          architecto ullam eos.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.lists}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.lists}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/blog">Fashion</Link>
          <Link href="/about">Coding</Link>
          <Link href="/contact">Travel</Link>
        </div>
        <div className={styles.lists}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/blog">Instagram</Link>
          <Link href="/about">Tiktok</Link>
          <Link href="/contact">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
