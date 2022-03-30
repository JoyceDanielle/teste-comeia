import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Gatin from "../assets/img/gatin.jpg"
import Imagem1 from "../assets/img/imagem1.png";
import Imagem2 from "../assets/img/imagem2.png";
import Imagem3 from "../assets/img/imagem3.png";

export default function Layout(props) {
    return (
        <div className="container-two-columns">
            <Carousel className="carousel-container" showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true} showArrows={false}>
                <img  src={Imagem1} />
                <img src={Imagem2} />
                <img src={Imagem3} />
            </Carousel>
            <div style={{overflowY:"auto"}}>
                {props.children}
            </div>
        </div>
    )
}