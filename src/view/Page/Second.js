import DemoFooter from 'componment/DemoFooter';
import DemoNavbar from 'componment/DemoNavbar';
import React from 'react'
import { useState } from 'react'
import Audio from 'view/Form-menu/Audio';
import Image from 'view/Form-menu/Image';
import Pdf from 'view/Form-menu/Pdf';
import Url from 'view/Form-menu/Url';
import Video from 'view/Form-menu/Video';
import MenuSection from './QR/MenuSection';
import Qrgenerator from './QR/Qrgenerator';


export default function Second() {
        const [menuselected, setmenuselected] = useState('null')
        const [content, setcontent] = useState('https://knowyourcollege.netlify.app/');

        const media = () => {
                switch (menuselected) {
                        case "Image": return <Image content={content} setcontent={setcontent} />;
                        case "Pdf": return <Pdf content={content} setcontent={setcontent} />;
                        case "Web": return <Url content={content} setcontent={setcontent} />;
                        case "Audio": return <Audio content={content} setcontent={setcontent} />;
                        case "Video": return <Video content={content} setcontent={setcontent} />;
                        default: <div></div>;

                }
        }


        return (
                <div>
                        <DemoNavbar />
                        <div className="container py-9">
                                <div className="row    ">
                                        <div className="col-lg-8">
                                                <MenuSection menuselected={menuselected} setmenuselected={setmenuselected} />

                                                {media()}



                                        </div>
                                        <div className="col-lg-4">
                                                <Qrgenerator content={content} setcontent={setcontent} />

                                        </div>



                                </div>
                        </div>



                        <DemoFooter />
                </div>
        )
}
