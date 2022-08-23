import React, { useState } from "react";
import {
  NavBar,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  Bars,
} from "../styles/StyledElements";

function Nav() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div>
      {" "}
      <NavBar show={show}>
        <Bars onClick={() => setShow(!show)} />
        <NavLogo to="/">MyReactSite</NavLogo>

        <NavMenu show={show}>
          <NavList>
            <NavLink to="/">Home</NavLink>
          </NavList>
          <NavList>
            <NavLink to="/about">About</NavLink>
          </NavList>
          <NavList>
            <NavLink to="/blog">Blog</NavLink>
          </NavList>
        </NavMenu>
      </NavBar>
    </div>
  );
}

export default Nav;
