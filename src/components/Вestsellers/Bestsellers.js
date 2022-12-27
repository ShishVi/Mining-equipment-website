import React from "react";
import bestsellers from './Bestsellers.module.css';
import ellipse from './Ellipse.svg'
import ItemBestsellers from './ItemBestsellers/ItemBestsellers'



function Bestsellers(props) {
    let itemBestseller = props.itemBestseller.map(item => <ItemBestsellers name={item.name} promotion={item.promotion}
                         foto_product={item.foto_product} price={item.price} old_price={item.old_price}
                         cart ={item.cart} heart_logo={item.heart_logo} availability={item.availability} id={item.id}/>);
  return (
      <section className={bestsellers.wrapper}>
          <div className={bestsellers.header_text}>
              <h2>хиты продаж</h2>
          </div>
          <div className={bestsellers.items}>
              {itemBestseller}
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
