// import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
      {/* <Toaster position="top-right" /> */}
    </>
  );
}

export default App;
