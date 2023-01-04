import React from "react";
import header from'./Header.module.css';
import mail from './mail.svg';
import phone from './phone.svg';
import telegramm from './icon_telegram.svg';
import whats from './icon_whats.svg';

function Header() {
  return (
      <header className = {header.Header_app}>
          <div className={header.Mail_header}>
              <div className={header.icon_mail_header}>
                  <img src={mail} alt='foto_logo_mail'/>
              </div>
              <div className={header.text_mail_header}>mein@miner.com</div>
          </div>
          <div className={header.Phone_header}>
              <div className={header.icon_phone_header}>
                  <img src={phone} alt='foto_phone_mail'/>
              </div>
              <div className={header.text_phone_header}>+7 (999) 999-99-99</div>
          </div>
          <div className={header.Social_icon}>
              <div className={header.icon}>
                  <a href='/'><img src={telegramm} alt='foto_logo_mail'/></a>
                  <a href='/'><img src={whats} alt='foto_logo_mail'/></a>
              </div>
          </div>
      </header>
  );
}

export default Header;
