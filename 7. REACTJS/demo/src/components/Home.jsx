import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import DemoLayout from "./DemoLayout";
export default function Home() {
  return (
    <div className="">
      <h1>Welcome to my Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="demo" element={<DemoLayout/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
