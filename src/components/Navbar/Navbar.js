import React from "react";
import navbar from './Navbar.module.css';
import NavbarLink from "./NavbarLink/NavbarLink";
import loupe from "./loupe.png";
import heart from './heart.svg';
import backet_shop from './basket_shopping.svg'
import IconCount from "./IconCount/IconCount";



function Navbar() {
  return (
      <nav className={navbar.navbar_main}>
          <div className={navbar.logo}>
            <a href='#'>MEIN MINER</a>
          </div>
          <div className={navbar.catalog}>
              <select>
                  <option disabled>Каталог товаров</option>
                  <option value='Asic miners'>Asic miners</option>
                  <option value='GPU фермы'>GPU фермы</option>
                  <option value='Видеокарты'>Видеокарты</option>
                  <option value='Аксессуары'>Аксессуары</option>
                  <option value='Компьютерные комплектующие'>Компьютерные комплектующие</option>
                  <option value='Комплектующие для майнинга'>Комплектующие для майнинга</option>
              </select>
          </div>
          <NavbarLink href={'#'} namelink ={'Цены'}/>
          <NavbarLink href={'#'} namelink ={'Калькулятор'}/>
          <NavbarLink href={'#'} namelink ={'Доставка'}/>
          <NavbarLink href={'#'} namelink ={'Отзывы'}/>
          <div className={navbar.navbar_button}>
              <button type='button'>Заказать звонок</button>
          </div>
          <div className={navbar.navbar_icon}>
              <div className={navbar.icon_navbar_item}>
                  <a href='#'><img src={loupe} alt='foto_loupe'/></a>
              </div>
              <div className={navbar.icon_navbar_item}>
                  <a href='#'>
                      <img src={heart} alt='foto_loupe'/>
                      <IconCount count = '6'/>
                  </a>
              </div>
              <div className={navbar.icon_navbar_item}>
                  <a href='#'>
                      <img src={backet_shop} alt='foto_loupe'/>
                      <IconCount count = '3'/>
                  </a>
              </div>
          </div>
      </nav>
  );
}

export default Navbar;
