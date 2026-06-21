import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Booking from "@/pages/Booking";
import RoomDetails from "@/pages/RoomDetails";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/rooms/:slug" element={<RoomDetails />} />
      </Routes>
    </>
  );
}
