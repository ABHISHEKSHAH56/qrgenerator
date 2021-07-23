import React from 'react'
import { useState } from 'react';
import QRCode from 'qrcode.react'
import Button from 'reactstrap/lib/Button';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Badge from 'reactstrap/lib/Badge';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

export default function Qrgenerator({ content, setcontent }) {
        // const [File, setFile] = useState(null);
        const [metaqr, setmetaqr] = useState({
                bgcolor: "#ffff",
                fgColor: "#000000",
                lhieght: 150,
                lwidth: 150,
                level: "H",



        })
        const [sizehieght, setsizehieght] = useState(250)
        const sizecontroller = (e) => {
                e.preventDefault()
                setsizehieght(parseInt(e.target.value))
        }
        // const handleImageChange = (e) => {
        //         e.preventDefault();
        //         let reader = new FileReader();
        //         let file = e.target.files[0];
        //         console.log(file)
        //         reader.onloadend = () => {
        //                 setFile(reader.result)
        //                 console.log(File);

        //         };
        //         reader.readAsDataURL(file);
        // }
        const downloadQR = () => {
                console.log(content)
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


                <div className="card">
                        <div className="container">
                                <div className="d-flex flex-row justify-content-center">
                                        <QRCode
                                                id="123456"
                                                value={content}
                                                size={sizehieght}


                                                bgColor={metaqr.bgcolor}
                                                fgColor={metaqr.fgColor}
                                                level={'L'}
                                                includeMargin={true}
                                                imageSettings={{

                                                        height: metaqr.lhieght,
                                                        width: metaqr.lwidth
                                                }}


                                        />

                                </div>
                                <div className="mb-4">


                                        <Row>
                                                <Col lg={6}>
                                                        <FormGroup>
                                                                <label className=" form-control-label" htmlFor="example-text-input">
                                                                        <Badge color="primary">Bg Color</Badge>
                                                                </label>

                                                                <Input
                                                                        type="color"
                                                                        value={metaqr.bgcolor}
                                                                        onChange={(e) => setmetaqr({ ...metaqr, bgcolor: e.target.value })}


                                                                        id="example-text-input"
                                                                ></Input>
                                                        </FormGroup>


                                                </Col>
                                                <Col lg={6}>
                                                        <FormGroup>
                                                                <label className=" form-control-label" htmlFor="example-text-input">
                                                                        <Badge color="danger">fg Color</Badge>
                                                                </label>

                                                                <Input
                                                                        type="color"
                                                                        value={metaqr.fgColor}
                                                                        onChange={(e) => setmetaqr({ ...metaqr, fgColor: e.target.value })}


                                                                        id="example-text-input"
                                                                ></Input>
                                                        </FormGroup>

                                                </Col>
                                        </Row>

                                        <FormGroup>
                                                <label htmlFor="exampleFormControlSelect1">
                                                        <Badge color="default">
                                                                Qr Select

                                                        </Badge>
                                                </label>
                                                <Input id="exampleFormControlSelect1" type="select" value={metaqr.height} onChange={sizecontroller}>
                                                        <option style={{ fontSize: "20px" }} value="50">xsmaller</option>
                                                        <option style={{ fontSize: "20px" }} value="100">small</option>
                                                        <option style={{ fontSize: "20px" }} value="150">xmedium</option>
                                                        <option style={{ fontSize: "20px" }} value="200">medium</option>
                                                        <option style={{ fontSize: "20px" }} value="250">Extra medium</option>
                                                        <option style={{ fontSize: "20px" }} value="350">Bigger</option>

                                                </Input>
                                        </FormGroup>
                                        <Button className="btn-icon  center" color="success" onClick={downloadQR} type="button">
                                                <span className="btn-inner--icon">
                                                        <i className="ni ni-bag-17"></i>
                                                </span>
                                                <span className="btn-inner--text">Download</span>
                                        </Button>












                                </div>



                        </div>
                </div >
        )
}
