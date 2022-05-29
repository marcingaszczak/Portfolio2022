import React, { useState } from "react";

import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { PageCopy, Pages } from "../../data/pages";
import { Link } from "gatsby";

const links = [{ addres: Pages.Hello }, { addres: Pages.Projects }];

const Nav: React.FC<{ currentPage: Pages }> = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="Header">
      <div className="Header__Hamburger" onClick={handleHamburgerClick}>
        <GiHamburgerMenu />
      </div>
      <ul className={"Header__Ul" + (menuOpen ? " Header__Ul--active" : "")}>
        {links.map((link, index) => {
          return (
            <li key={index} className="Header__Li">
              <Link to={PageCopy[link.addres].url} className="Header__Li__Text">
                {link.addres}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Nav;
