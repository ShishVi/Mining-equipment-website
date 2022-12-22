import React from "react";
import item from './ItemProduct.module.css';
import foto from './image_1.png';
import arrow from "./Arrow.svg";


function ItemProduct(props) {
    return (
            <div className={item.grid_wrapper}>
                <div className={item.item}>
                    <div className={item.ellipse}></div>
                    <div className={item.foto_product}>
                        <img src={props.foto} alt='foto1'/>
                    </div>
                    <div>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={item.button}>
                        <a href='#'>
                            <div>
                                В каталог
                            </div>
                            <div>
                                <img src={arrow} alt='foto_arrow'/>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
    );
}

export default ItemProduct;
