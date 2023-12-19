import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignIn from "./pages/signin/SignIn";
import SignIn from "./pages/signIn/SignIn";
import AdminDashboard from "./pages/adminPages/dashboard/AdminDashboard";
import UserDashboard from "./pages/userPages/UserDashboard";
import Projects from "./pages/userPages/Projects";
import ProjectDetail from "./pages/userPages/ProjectDetail";
import UnitDetail from "./pages/userPages/UnitDetail";

// import Messages from "./pages/userPages/Messages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/projects/units/:unitId" element={<UnitDetail />} />
        {/* <Route path="/messages" element={<Messages />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
