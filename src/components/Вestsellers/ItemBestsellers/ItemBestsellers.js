import React from "react";
import itembestsellers from './ItemBestsellers.module.css';

function ItemBestsellers(props) {
  return (
      <div className={itembestsellers.item}>
          <div className={itembestsellers.item_header}>
              <div><span>{props.promotion}</span></div>
              <div>
                  <img src={props.heart_logo} />
              </div>
          </div>
          <figure>
              <p><img src={props.foto_product}  alt='foto_1'/></p>
              <figcaption>{props.name}</figcaption>
          </figure>
          <div>
              <div className={itembestsellers.ellips}></div>
              <div>{props.availability}</div>
          </div>
          <div className={itembestsellers.price_item}>
              <div className={itembestsellers.price}>
                  {props.price}
              </div>
              <div className={itembestsellers.old_price}>
                  <s><span>{props.old_price}</span></s>
              </div>
              <div className={itembestsellers.cart}>
                  <img src={props.cart}/>
              </div>
          </div>
          <div className={itembestsellers.card_button}>
              <a href='#'><button type='button'>Купить в 1 клик</button></a>
          </div>
      </div>
  );
}

export default ItemBestsellers;
