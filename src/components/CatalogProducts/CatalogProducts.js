import React from "react";
import catalog from './CatalogProducts.module.css';
import ItemProduct from "./ItemProduct/ItemProduct";


function CatalogProducts(props) {

    return (
        <section className={catalog.wrapper}>
            <div className={catalog.name}><h2>Категории товаров</h2></div>
            {props.products.map(product => <ItemProduct name={product.name} foto={product.foto} id={product.id}/>)}
        </section>
    );
}

export default CatalogProducts;
