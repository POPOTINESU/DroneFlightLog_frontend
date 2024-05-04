"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <p>{message}</p>;
}
