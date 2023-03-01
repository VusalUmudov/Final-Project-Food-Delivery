import React from 'react'
import './slider.css'
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'
import slider5 from '../images/slider5.jpg'
import slider6 from '../images/slider6.jpg'

function Slider() {
    return (
        <div className='slider'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={slider1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider3} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider4} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider5} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider6} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev slider-left" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <div>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </div>
                </a>
                <a className="carousel-control-next slider-right" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <div>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </div>

                </a>
            </div>



        </div>
    )
}

export default Slider