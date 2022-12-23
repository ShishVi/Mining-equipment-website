import React from "react";
import item from './ItemElement.module.css';

function ItemElement (props) {
  return (
      <div className={item.item}>
          <div className={item.item_fon_ellipse}>
              <img src={props.foto}/>
          </div>

          <div className={item.item_text}>
              {props.text}
          </div>
      </div>
  );
}

export default ItemElement;
