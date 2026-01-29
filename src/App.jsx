import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Departments from "./pages/Department";
import AddDepartment from "./pages/AddDepartment";
import Navbar from "./pages/Components/Navbar";
import ProtectedRoute from "./pages/Components/ProtectRouter";

function App() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/departments"
          element={
            <ProtectedRoute>
              <Departments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-department"
          element={
            <ProtectedRoute>
              <AddDepartment />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
