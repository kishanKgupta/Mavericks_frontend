import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav
      name="navbar"
      className="bg-gradient-to-r from-black to-gray-900 h-28 "
    >
      <div>
        <img src="./image/logos/img2.png" alt="logo" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="font-semibold flex gap-5 text-white cursor-pointer">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={300}
            className="p-1 bg-gradient-to-r from-cyan-500 to-blue-700"
          >
            HOME
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="p-1 bg-gradient-to-r from-cyan-500 to-blue-700"
          >
            EVENTS
          </Link>
          <Link
            to="goodies"
            spy={true}
            smooth={true}
            duration={500}
            className="p-1 bg-gradient-to-r from-cyan-500 to-blue-700"
          >
            Goodies
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="p-1 bg-gradient-to-r from-cyan-500 to-blue-700"
          >
            ABOUT
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-6 p-1 bg-gradient-to-r from-cyan-500 to-blue-700"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="hamburger mr-5" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
