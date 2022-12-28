import React from "react";
import serviceStyle from './ServiceItem.module.css';





function ServiceItem(props) {
  return (
              <div>
                  <div className={serviceStyle.image}>
                      <img src={props.foto} alt='foto_service'/>
                  </div>
                  <div className={serviceStyle.name}>
                      <p>{props.name}</p>
                  </div>
              </div>
  );
}

export default ServiceItem;
