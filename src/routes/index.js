import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/homepage";
import OurTeamPage from "../pages/ourTeam";
function IndexRoute() {
  useEffect(() => {
    sessionStorage.setItem("opened", "yes");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-team" element={<OurTeamPage />} />
    </Routes>
  );
}

export default IndexRoute;
