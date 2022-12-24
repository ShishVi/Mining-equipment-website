import React from "react";
import './App.css';
import  Header from '../src/components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import CardProduct from "./components/CardProduct/CardProduct";
import CatalogProducts from "./components/CatalogProducts/CatalogProducts";
import Advantages from "./components/Advantages/Advantages";
import Bestsellers from "./components/Вestsellers/Bestsellers";




function App(props) {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <CardProduct />
        <CatalogProducts products={props.state.products} />
        <Advantages advantages={props.state.advantages}/>
        <Bestsellers />
    </div>
  );
}

export default App;
