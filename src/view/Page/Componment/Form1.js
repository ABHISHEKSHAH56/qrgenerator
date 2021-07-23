import React from "react";

// reactstrap components
import { FormGroup, Form, Input, Col, Row } from "reactstrap";
import QRCode from 'qrcode.react';
import Button from "reactstrap/lib/Button";

function Form1() {

        const downloadQR = () => {
                const canvas = document.getElementById("123456");
                const pngUrl = canvas
                        .toDataURL("image/png")
                        .replace("image/png", "image/octet-stream");
                let downloadLink = document.createElement("a");
                downloadLink.href = pngUrl;
                downloadLink.download = "123456.png";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
        };
        return (
                <>
                        <div className="c" >
                                <QRCode id="8076367467" value="kjjjj" />

                                <a onClick={downloadQR}> Download QR </a>
                        </div>
                        <Form>
                                <Row>
                                        <Col md={6}>



                                                <FormGroup >
                                                        <label className=" form-control-label" htmlFor="example-url-input">
                                                                URL
                                                        </label>
                                                        <Input
                                                                defaultValue=""
                                                                id="example-url-input"
                                                                type="url"
                                                        ></Input>
                                                </FormGroup>
                                                <FormGroup>
                                                        <label className=" form-control-label" htmlFor="example-tel-input">
                                                                Phone
                                                        </label>
                                                        <Input
                                                                defaultValue="40-(770)-888-444"
                                                                id="example-tel-input"
                                                                type="tel"
                                                        ></Input>
                                                </FormGroup>
                                        </Col>
                                </Row>

                        </Form>
                </>
        );
}

export default Form1;