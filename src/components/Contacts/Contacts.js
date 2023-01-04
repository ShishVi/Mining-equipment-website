import React from "react";
import contactstyle from './Contacts.module.css';
function Contacts() {
  return (
      <section className={contactstyle.wrapper}>
          <div className={contactstyle.contacts}>
              <h2>Контакты</h2>
              <ul>
                  <li>г. Москва, ул. Покровка, 47А</li>
                  <li>м. Курская</li>
                  <li><a href='/'>mein@miner.com</a></li>
                  <li>+7 (999) 999-99-99</li>
                  <li>График работы: <br/>ежедневно с 9:00 до 20:00</li>
              </ul>
              <div className={contactstyle.icon_image}>
                  <a href='/'><img src='./Contacts/telegram.svg'/></a>
                  <a href='/'><img src='./Contacts/whatsapp.svg'/></a>
              </div>

          </div>
          <div className={contactstyle.map}>
              <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Afe0431f8b0e6981ca07d2d2e9453fcc46f1c8dd693d34295287816d7a3bdac74&amp;source=constructor"
                  width="680" height="365" frameBorder="0">

              </iframe>
          </div>



      </section>
  );
}

export default Contacts;
