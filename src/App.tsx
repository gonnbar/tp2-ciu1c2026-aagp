import { BrowserRouter, Routes, Route } from "react-router";

import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;