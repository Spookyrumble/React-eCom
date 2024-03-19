import Nav from "../Nav";
import SearchField from "../Search";
import CartIcon from "../CartIcon";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header>
      <Hamburger onClick={toggleMenu} />

      <div className={isOpen ? "menu open" : "menu"}>
        <Nav />
        <SearchField />
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
