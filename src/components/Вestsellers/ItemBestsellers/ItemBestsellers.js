import React from "react";
import itembestsellers from './ItemBestsellers.module.css';

function ItemBestsellers() {
  return (
      <div className={itembestsellers.item}>
          <div className={itembestsellers.item_header}>
              <div><span>ХИТ</span></div>
              <div>
                  <img src='./BestSellers/empty_heart.svg' />
              </div>
          </div>
          <figure>
              <p><img src='./BestSellers/image_1.svg'  alt='foto_1'/></p>
              <figcaption>Antminer L7 8800 Mh/s</figcaption>
          </figure>
          <div>
              <div className={itembestsellers.ellips}></div>
              <div>В наличии</div>
          </div>
          <div className={itembestsellers.price_item}>
              <div className={itembestsellers.price}>
                  615 000 ₽
              </div>
              <div className={itembestsellers.cart}>
                  <img src='./BestSellers/cart.svg'/>
              </div>
          </div>
          <div className={itembestsellers.card_button}>
              <a href='#'><button type='button'>Купить в 1 клик</button></a>
          </div>
      </div>
  );
}

export default ItemBestsellers;
