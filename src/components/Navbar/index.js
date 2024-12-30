import React from "react";
import Logo from "../../assets/icons/ottl-logo.svg";

function NavbarContent(props) {
  return (
    <nav className="max-w-[70rem] m-auto h-20 flex items-center">
      <div className="w-full flex justify-between">
        <a className="" href="https://www.openturf.in">
          <img src={Logo} alt="Navbar Logo" className="w-24" />
        </a>
        <div className="flex items-center space-x-8">{props.children}</div>
      </div>
    </nav>
  );
}
export default NavbarContent;
