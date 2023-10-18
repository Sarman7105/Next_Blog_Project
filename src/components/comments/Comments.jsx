"use client";
import React, { useEffect, useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Comments = ({ postSlug }) => {
  const session = useSession();
  const [comments, setComments] = useState([]);
  const [desc, setDesc] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/comments?postSlug=${postSlug}`
      );
      const data = await response.json();
      setComments(data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    setDesc("");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [postSlug]);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {session.status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {comments?.map((item) => (
          <div className={styles.comment} key={item.id}>
            <div className={styles.user}>
              {item?.user?.image && (
                <Image
                  src={item.user.image}
                  alt=""
                  height={50}
                  width={50}
                  className={styles.image}
                />
              )}
              <div className={styles.userInfo}>
                <span className={styles.username}>{item?.user?.name}</span>
                <span className={styles.date}>
                  {item.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
            <p className={styles.desc}>{item?.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
