import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignIn from "./pages/signin/SignIn";
import SignIn from "./pages/signIn/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
