import React from "react";
import navbarlink from './NavbarLink.module.css';


function NavbarLink(props) {
  return (
          <div className={navbarlink.item}>
              <a href={props.href}>{props.namelink}</a>
          </div>
  );
}

export default NavbarLink;
