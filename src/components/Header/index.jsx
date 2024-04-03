import Nav from "../Nav";
import SearchField from "../Search";
import CartIcon from "../CartIcon";
import Hamburger from "hamburger-react";
import { useState } from "react";
import * as S from "./index.styles";
import Logo from "../../assets/cyber_logo.svg";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header>
      <button onClick={toggleMenu}>
        <Hamburger />
      </button>
      <div className={isOpen ? "menu open" : "menu"}>
        <Nav />
        <SearchField />
      </div>
      <S.Logo>
        <img className={"logoPosition"} src={Logo} alt="Shop name" />
      </S.Logo>
      <div>
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
