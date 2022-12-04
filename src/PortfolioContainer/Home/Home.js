import React from "react";
import "../Home/Home.css";
import { Profile } from "./Profile/Profile";

export default function Home() {
  return (
    <div className="home-container">
      <Profile />
    </div>
  );
}
