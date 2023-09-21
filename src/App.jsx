import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import PropertyRoutes from "remote/Routes";

export default function App() {
  return (
    <div>
      <h1>AppShell</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">main</Link>
          </li>
          <li>
            <Link to="/properties">properties</Link>
          </li>
          <li>
            <Link to="/properties/1">properties/1</Link>
          </li>
        </ul>
        <Routes>
          <Route index element={<>Main</>} />
          <Route path="/properties/*" element={<PropertyRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
