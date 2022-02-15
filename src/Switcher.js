import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";
import Login from "./Login";
import { useState } from "react";

const Switcher = () => {
  const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        {token && <Route path="/create" element={<Create token={token} />} />}
        {token && <Route path="/update" element={<Update token={token} />} />}
        {token && <Route from="/" to="/create" />}
        <Route path="*" element={<Login setToken={setToken} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
