import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignIn from "./pages/signin/SignIn";

import Home from "./pages/website/Home";
import AboutUs from "./pages/website/AboutUs";
import Gallery from "./pages/website/Gallery";
import Offers from "./pages/website/Offers";
import OfferDetail from "./pages/website/OfferDetail";
import SignIn from "./pages/signIn/SignIn";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/offers/:offerId" element={<OfferDetail />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/sign-in" element={<SignIn />} />

      {/* private routes routes */}
      <Route path="/*" element={<PrivateRoutes />} />
    </Routes>
  );
}

export default App;
