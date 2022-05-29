import React from "react";
import { footerLinks } from "../../data/FooterDB";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__Contact">
        {footerLinks.map((link) => (
          <a href={link.address} target="_blank" key={link.id}>
            <div className={`Footer__Contact__Tile ${link.styleModifier}`}>
              <link.icon />
            </div>
          </a>
        ))}
      </div>
      <div className="Footer__Copyrights">© All Rights Reserved 2022</div>
    </footer>
  );
};

export default Footer;
