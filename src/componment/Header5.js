import React from "react";
import qr from "../assets/img/qr-code.png"
// reactstrap components
import {
        Button,
        UncontrolledCollapse,

        NavbarBrand,
        Navbar,
        NavItem,
        NavLink,
        Nav,
        Container,
        Row,
        Col,
} from "reactstrap";
import { Link } from "react-router-dom";

// Core Components

function Header5() {
        return (
                <>
                        <header className="header-5">
                                <Navbar className="navbar-absolute" expand="lg">
                                        <Container>
                                                <div className="navbar-translate">
                                                        <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                                                                QR Baba
                                                        </NavbarBrand>
                                                        <button
                                                                aria-controls="navbarSupportedContent"
                                                                aria-expanded={false}
                                                                aria-label="Toggle navigation"
                                                                className="navbar-toggler"
                                                                data-target="#example-header-6"
                                                                data-toggle="collapse"
                                                                id="example-header-6"
                                                                type="button"
                                                        >
                                                                <span className="navbar-toggler-icon"></span>
                                                        </button>
                                                </div>
                                                <UncontrolledCollapse
                                                        id="example-header-6"
                                                        navbar
                                                        toggler="#example-header-6"
                                                >
                                                        <div className="navbar-collapse-header">
                                                                <Row>
                                                                        {/* <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Argon <span>PRO</span>
                    </a>
                  </Col> */}
                                                                        <Col className="collapse-close text-right" xs="6">
                                                                                <button
                                                                                        aria-controls="navigation-index"
                                                                                        aria-expanded={false}
                                                                                        aria-label="Toggle navigation"
                                                                                        className="navbar-toggler"
                                                                                        data-target="#example-header-6"
                                                                                        data-toggle="collapse"
                                                                                        id="example-header-6"
                                                                                        type="button"
                                                                                >
                                                                                        <span></span>
                                                                                        <span></span>
                                                                                </button>
                                                                        </Col>
                                                                </Row>
                                                        </div>
                                                        <Nav className="mx-auto" navbar>
                                                                <NavItem>
                                                                        <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                                                Home
                                                                        </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                        <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                                                About Us
                                                                        </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                        <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                                                Products
                                                                        </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                        <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                                                Contact Us
                                                                        </NavLink>
                                                                </NavItem>
                                                        </Nav>
                                                        <Nav className="nav navbar-right" navbar>
                                                                <NavItem>
                                                                        <NavLink href="https://twitter.com/im_Abhishekshah">
                                                                                <i className="fab fa-twitter"></i>
                                                                        </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                        <NavLink href="https://twitter.com/im_Abhishekshah">
                                                                                <i className="fab fa-facebook-square"></i>
                                                                        </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                        <NavLink href="https://twitter.com/im_Abhishekshah">
                                                                                <i className="fab fa-instagram"></i>
                                                                        </NavLink>
                                                                </NavItem>
                                                        </Nav>
                                                </UncontrolledCollapse>
                                        </Container>
                                </Navbar>
                                <div className="page-header">
                                        <Container>
                                                <Row className="align-items-center text-left">
                                                        <Col lg="5" xs="12">
                                                                <h1 className="display-3">
                                                                        Save your Records
                                                                        <span className="text-primary">Generate QR Code</span>
                                                                </h1>
                                                                <p className="lead pb-4">
                                                                        We aim high at being focused on building relationships with
                                                                        our clients and community. Using our creative gifts drives
                                                                        this foundation.
                                                                </p>
                                                                <Row className="row-input">

                                                                        <Col className="pl-lg-0" >
                                                                                <Link to="/qrgenrate">
                                                                                        <Button block color="primary" >
                                                                                                Generate your QR Code
                                                                                        </Button>
                                                                                </Link>

                                                                        </Col>
                                                                </Row>
                                                        </Col>
                                                        <Col className="pl-0" lg="7" xs="12">
                                                                <img
                                                                        alt="..."
                                                                        className="ml-lg-5"
                                                                        src={qr}
                                                                        width="100%"
                                                                ></img>

                                                        </Col>
                                                </Row>
                                        </Container>
                                </div>
                        </header>
                </>
        );
}

export default Header5;
