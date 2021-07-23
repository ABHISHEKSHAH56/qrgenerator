import React from 'react'
import Badge from 'reactstrap/lib/Badge'
import Card from 'reactstrap/lib/Card'
import FormGroup from 'reactstrap/lib/FormGroup'
import Input from 'reactstrap/lib/Input'

export default function Video({ content, setcontent }) {
        return (
                <div>

                        <div className="container">

                                <div className="section">
                                        <Card className=" card-body bg-warning">
                                                <h2>Add Video </h2>
                                        </Card>


                                        <div className="container">
                                                <FormGroup>
                                                        <label className=" form-control-label" htmlFor="example-text-input">
                                                                <Badge color="default">Url Of Video</Badge>
                                                        </label>

                                                        <Input
                                                                type="text" value={content} onChange={(e) => { setcontent(e.target.value) }}
                                                                id="example-text-input"
                                                        ></Input>
                                                </FormGroup>

                                        </div>
                                </div>

                        </div>


                </div>
        )
}
