import React from "react";
import './App.css';
import  Header from '../src/components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import CardProduct from "./components/CardProduct/CardProduct";
import CatalogProducts from "./components/CatalogProducts/CatalogProducts";




function App(props) {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <CardProduct />
        <CatalogProducts products={props.products} />
    </div>
  );
}

export default App;
