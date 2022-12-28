import React from "react";
import aboutStyle from './About.module.css';
import ServiceItem from "./ServiceItem/ServiceItem";





function About(props) {
    let serviceItemNew = props.serviceItem.map (item =><ServiceItem name={item.name} foto={item.foto} id={item.id}/> )
  return (
      <section className={aboutStyle.wrapper}>
          <div className={aboutStyle.about_text}>
              <h2>о КОМПАНИИ</h2>
              <p>
                  С 2017 года Main-miner поставляет технику для майнинга на российский рынок оптом.
                  За пять лет мы смогли укрепить свои позиции на рынке оборудования, вырастили персонал, прекрасно разбирающийся в каждом типе асиков и комплектующих.
              </p>
              <p>
                  Если вы хотите купить асики оптом, то с нами можете быть уверены как в качестве техники,
                  так и в надёжности сотрудничества. Лучше всего о нас говорит репутация!
              </p>
          </div>
          <div className={aboutStyle.image_about}>
              <img src='./About/about_foto.png' alt='foto_about'/>
          </div>
          <div className={aboutStyle.service}>
              {serviceItemNew}

          </div>

      </section>
  );
}

export default About;
