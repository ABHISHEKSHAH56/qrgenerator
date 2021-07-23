import React from 'react'
import imgcan from '../../../assets/img/icons/1.png'
import audio from "../../../assets/img/icons/headphone.png"
import video from "../../../assets/img/icons/online-video.png"
import pdf from "../../../assets/img/icons/file.png"
import web from "../../../assets/img/icons/web.png"


export default function MenuSection({ menuselected, setmenuselected }) {
        const styles = {
                width: "100px",
                height: "120px",
                margin: "5px"
        }
        const imgstyle = {
                width: "60px",
                height: "60px",
                margin: "15px",

                padding: "5px"

        }

        return (

                <div className="m-2 d-flex flex-row flex-wrap">

                        <div style={styles} className="card" onClick={() => setmenuselected("Image")}>

                                <img style={imgstyle}
                                        alt="..."
                                        className=" img-fluid "
                                        src={imgcan}

                                />
                                <div className="title text-center">Image</div>
                        </div>


                        <div style={styles} className="card" onClick={() => setmenuselected("Web")}>
                                <img style={imgstyle}
                                        alt="..."
                                        className=" img-fluid "
                                        src={web}

                                />
                                <div className="title text-center">Url</div>
                        </div>

                        <div style={styles} className="card" onClick={() => setmenuselected("Audio")}>
                                <img style={imgstyle}
                                        alt="..."
                                        className=" img-fluid "
                                        src={audio}

                                />
                                <div className="title text-center">Audio</div>
                        </div>
                        <div style={styles} className="card " onClick={() => setmenuselected("Pdf")}>
                                <img style={imgstyle}
                                        alt="..."
                                        className=" img-fluid "
                                        src={pdf}

                                />
                                <div className="title text-center">Pdf</div>
                        </div>
                        <div style={styles} className="card" onClick={() => setmenuselected("Video")}>
                                <img style={imgstyle}
                                        alt="..."
                                        className=" img-fluid "
                                        src={video}

                                />
                                <div className="title text-center">Video</div>
                        </div>


                </div>
        )
}
