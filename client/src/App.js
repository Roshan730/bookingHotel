import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotels from "./pages/Hotel/Hotels";
import List from "./pages/List/List";
import NoData from "./pages/NoData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotels />} />
        <Route path="*" element={<NoData />} />
      </Routes>
    </Router>
  );
}

export default App;
