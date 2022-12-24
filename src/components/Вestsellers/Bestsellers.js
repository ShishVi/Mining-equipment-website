import React from "react";
import bestsellers from './Bestsellers.module.css';
import ellipse from './Ellipse.svg'


function Bestsellers() {
  return (
      <section className={bestsellers.wrapper}>
          <div className={bestsellers.header_text}>
              <h2>хиты продаж</h2>
          </div>
          <div className={bestsellers.items}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div className= {bestsellers.pagination_grid}>
              <div className= {bestsellers.pagination}>
                  <a href="#" className={bestsellers.active}><img src={ellipse} /></a>
                  <a href="#" ><img src={ellipse} /></a>
                  <a href="#"><img src={ellipse} /></a>
                  <a href="#"><img src={ellipse} /></a>
              </div>
          </div>
      </section>
  );
}

export default Bestsellers;
