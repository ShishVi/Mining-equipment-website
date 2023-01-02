import React from "react";
import advantages from './Advantages.module.css';
import ItemElement from "./ItemProducts/ItemElement/ItemElement";


function Advantages(props) {
  return (
      <section className={advantages.wrapper}>
          <div className={advantages.fon_vector}>
              <img src='./Advantages/fon_vector.svg' />
              <div className={advantages.ellipse_bottom}></div>
          </div>
          <div className={advantages.item_advantages}>
              <h2>наши преимущества</h2>
              <img src='./Advantages/group.svg' />
          </div>
          <div className={advantages.items}>
              {props.advantages.map(advantage =><ItemElement text={advantage.text} foto={advantage.foto_logo} id={advantage.id}/>)}
          </div>


      </section>
  );
}

export default Advantages;
