import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from '../assets/img/brand/white.png'
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function DemoNavbar(props) {
  const [collapseOpen, toggleCollapse] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    headroom.init();
  });
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="dark-navbar-main"
      >
        <Container>
          <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
            <h2 style={{ color: "#fff" }}>QR Baba</h2>
          </NavbarBrand>

        </Container>
      </Navbar>
    </>
  );
}

DemoNavbar.defaultProps = {
  type: "dark",
};

DemoNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default DemoNavbar;
