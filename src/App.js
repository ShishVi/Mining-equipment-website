import React from "react";
import './App.css';
import  Header from '../src/components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import CardProduct from "./components/CardProduct/CardProduct";
import CatalogProducts from "./components/CatalogProducts/CatalogProducts";
import Advantages from "./components/Advantages/Advantages";
import Bestsellers from "./components/Вestsellers/Bestsellers";
import About from "./components/About/About";
import RequestForm from "./components/RequestForm/RequestForm";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";




function App(props) {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <CardProduct />
        <CatalogProducts products={props.state.products} />
        <Advantages advantages={props.state.advantages}/>
        <Bestsellers itemBestseller ={props.state.itemBestsellers} />
        <About serviceItem={props.state.serviceItem}/>
        <RequestForm />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
