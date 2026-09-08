import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MisgsProject from "./pages/MisgsProject";
import StudentGigsProject from "./pages/StudentGigsProject";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/misgs" element={<MisgsProject />} />
        <Route
          path="/projects/student-gigs"
          element={<StudentGigsProject />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;