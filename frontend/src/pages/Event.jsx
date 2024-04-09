import React from "react";
import { Outlet } from "react-router-dom";

const Event = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Event;
