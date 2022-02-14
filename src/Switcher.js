import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";

const Switcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
