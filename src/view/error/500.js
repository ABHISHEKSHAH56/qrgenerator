import DemoNavbar from "componment/DemoNavbar";
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Error500() {
        React.useEffect(() => {
                document.body.classList.add("error-page");
                window.scrollTo(0, 0);
                document.body.scrollTop = 0;
                return function cleanup() {
                        document.body.classList.remove("error-page");
                };
        });
        return (
                <>
                        <DemoNavbar type="primary" />
                        <div className="wrapper">
                                <div className="page-header page-500">
                                        <div
                                                className="page-header-image"

                                        ></div>


                                        <Container >
                                                <Row>

                                                        <Col className="text-center" md="12">
                                                                <h1 className="title">500</h1>
                                                                <h4 className="display-4">Error :(</h4>
                                                                <p className="lead">We are sorry. This was unexpected.</p>
                                                        </Col>
                                                </Row>
                                        </Container>
                                </div>
                        </div>
                </>
        );
}

export default Error500;
