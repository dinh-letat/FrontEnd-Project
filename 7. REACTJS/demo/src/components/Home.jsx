import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import DemoLayout from "./DemoLayout";
import BindingData from "./BindingData";
import ArrayCarData from "./ArrayCarData";
import CarPickInfo from "./CarPickInfo";
import Login from "./Login";
import VirtualGlasses from "./VirtualGlasses"

export default function Home() {
  return (
    <div className="">
      <h1 className="text-center">Welcome to my Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="demo" element={<DemoLayout />} />
            <Route path="data" element={<BindingData />} />
            <Route path="array" element={<ArrayCarData />} />
            <Route path="carpick" element={<CarPickInfo />} />
            <Route path="login" element={<Login />} />
            <Route path="glass" element={<VirtualGlasses />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
