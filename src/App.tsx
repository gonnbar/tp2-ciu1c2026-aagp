import { Navigate, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Welcome />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<About />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />

          <Route path="/post/:id" element={<PostDetail />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/create-post" element={<CreatePost />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
