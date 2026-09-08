import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MisgsProject from "./pages/MisgsProject";
import StudentGigsProject from "./pages/StudentGigsProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/misgs" element={<MisgsProject />} />
        <Route
          path="/projects/student-gigs"
          element={<StudentGigsProject />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;