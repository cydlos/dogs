import React from "react";
import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "./Feed";

const User = () => {
  return <section className="container">
    <UserHeader />
    <Routes>
      <Route path="/" element={<Feed />}/>
    </Routes>
  </section>
};

export default User;
