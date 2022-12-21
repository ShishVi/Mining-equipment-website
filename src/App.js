import React from "react";
import './App.css';
import  Header from '../src/components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import CardProduct from "./components/CardProduct/CardProduct";



function App() {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <CardProduct />

    </div>
  );
}

export default App;
