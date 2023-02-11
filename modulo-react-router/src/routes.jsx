import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="login/:slug" element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
