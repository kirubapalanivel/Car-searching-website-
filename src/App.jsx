// App.js
import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import CarList from "./component/CarList"; // Import CarList component
import ContctForm from "./component/ContactForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/contact" element={<ContctForm />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;


