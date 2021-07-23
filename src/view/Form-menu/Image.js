import React from 'react'
import Badge from 'reactstrap/lib/Badge'
import Card from 'reactstrap/lib/Card'
import FormGroup from 'reactstrap/lib/FormGroup'
import Input from 'reactstrap/lib/Input'

export default function Image({ content, setcontent }) {
        // const [File, setFile] = useState(null);

        return (
                <div>

                        <div className="container">

                                <div className="section">
                                        <Card className=" card-body bg-primary">
                                                <h2>Add Images </h2>
                                        </Card>


                                        <div className="container">
                                                <FormGroup>
                                                        <label className=" form-control-label" htmlFor="example-text-input">
                                                                <Badge color="default">Add Image Url</Badge>
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
