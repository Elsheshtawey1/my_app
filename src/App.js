// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ScaleLoader from "react-spinners/ScaleLoader";
import NavBar from "./NavBar";
import Products from "./Products"; // تحقق من صحة الاستيراد
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="loader">
          <ScaleLoader
            color={"#f87765"}
            loading={loading}
            height={100}
            margin={10}
          />
        </div>
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
