import React from "react";
import footerstyle from './Footer.module.css';
function Footer() {
  return (
      <footer>
          <div className={footerstyle.wrapper}>
              <div className={footerstyle.logo_text}>
                  <a href="/"><h2>MEIN MINER</h2></a>
                  <p>© Mein Miner, 2022</p>
              </div>
              <div className={footerstyle.info_clients}>
                  <h2>Покупателям</h2>
                  <ul>
                      <li><a href='/'>О компании</a></li>
                      <li><a href='/'>Цены</a></li>
                      <li><a href='/'>Калькулятор</a></li>
                      <li><a href='/'>Доставка</a></li>
                      <li><a href='/'>Отзывы</a></li>
                      <li><a href='/'>Контакты</a></li>
                  </ul>
              </div>
              <div className={footerstyle.info_clients}>
                  <h2>каталог товаров</h2>
                  <ul>
                      <li><a href='/'>Asic miners</a></li>
                      <li><a href='/'>GPU фермы</a></li>
                      <li><a href='/'>Видеокарты</a></li>
                      <li><a href='/'>Аксессуары</a></li>
                      <li><a href='/'>Компьютерные комплектующие</a></li>
                      <li><a href='/'>Комплектующие для майнинга</a></li>
                  </ul>
              </div>
              <div>
                  <div className={footerstyle.btn}>
                      <a href="/">
                          <button>Заказать звонок</button>
                      </a>
                  </div>
                  <div className={footerstyle.info_offer}>
                      <ul>
                          <li><a href='/'>Публичная оферта</a></li>
                          <li><a href='/'>Политика конфиденциальности</a></li>
                      </ul>
                  </div>
              </div>

          </div>

      </footer>
  );
}

export default Footer;
