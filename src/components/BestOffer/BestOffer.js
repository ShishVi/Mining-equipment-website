import React from "react";
import card from './BestOffer.module.css';
import bitcoin from './bitcoin.svg';
import arrow from './Arrow.svg';

function BestOffer() {
  return (
      <section className={card.cards_wrapper}>
          <div className={card.card}>
              <div className={card.ellipse}></div>
              <h2>Выгодное предложение</h2>
              <div className={card.text}>
                  <div>-20%</div>
                  <div>на все товары Antminer</div>
              </div>
              <div className={card.image_product}><img src={bitcoin} alt='foto_bitcoin'/></div>
              <div className={card.button}>
                  <a href='#'>
                      <div>
                          В каталог
                      </div>
                      <div>
                          <img src={arrow}/>
                      </div>
                  </a>
              </div>
              <div className={card.ellipse_bottom}></div>
              <div className={card.ellipse_top}></div>
          </div>

      </section>
  );
}

export default BestOffer;
