import React from "react";
import bestoffer from './BestOffer.module.css';
import bitcoin from './bitcoin.svg';
import arrow from './Arrow.svg';

function BestOffer() {
  return (
      <section className={bestoffer.cards_wrapper}>
          <div className={bestoffer.card}>
              <div className={bestoffer.ellipse}></div>
              <h2>Выгодное предложение</h2>
              <div className={bestoffer.text}>
                  <div>-20%</div>
                  <div>на все товары Antminer</div>
              </div>
              <div className={bestoffer.image_product}><img src={bitcoin} alt='foto_bitcoin'/></div>
              <div className={bestoffer.button}>
                  <a href='#'>
                      <div>
                          В каталог
                      </div>
                      <div>
                          <img src={arrow} alt='foto_arrow'/>
                      </div>
                  </a>
              </div>
              <div className={bestoffer.ellipse_bottom}></div>
              <div className={bestoffer.ellipse_top}></div>
          </div>

      </section>
  );
}

export default BestOffer;
