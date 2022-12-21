import React from "react";
import iconCount from './IconCount.module.css';




function IconCount(props) {
  return (
      <div className={iconCount.icon_navbar}>
          <div className={iconCount.icon_navbar_count}>
              {props.count}
          </div>
      </div>
  );
}

export default IconCount;
