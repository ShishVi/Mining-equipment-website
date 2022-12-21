import React from "react";
import card from './CardProduct.module.css';
import card_fon from './image_card_fon.png';
import product from './image_product.png';

function CardProduct() {
  return (
      <section className={card.cards_wrapper}>
          <div className={card.card}>
              <div className={card.ellipse}></div>
              <div className={card.image_fon}><img src={card_fon} alt='foto_fon'/></div>
              <h1>Оборудование для майнинга оптом</h1>
              <span>с гарантией 12 месяцев</span>
              <div className={card.card_button}>
                  <a href='#'><button type='button'>Перейти в каталог</button></a>
              </div>
             <div className={card.image_product}><img src={product} alt='foto_product'/></div>
              <div className={card.carousel}>
                  <div className={card.active}></div>
                  <div></div>
                  <div></div>
                  <div></div>

              </div>
          </div>

      </section>
  );
}

export default CardProduct;
