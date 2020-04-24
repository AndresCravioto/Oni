import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel.css";

export default class Carousel extends Component {

    photos = [
    { src: '../../../public/images/trabajoHonesto.png' },
  ];

    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3050,
        pauseOnHover: true
      };
      return (
        <div className="sidePaddings bottomMargin50">
            <h1 className="carouselTitle darkblue center">Popular Memes</h1>
          <Slider {...settings} className="hasShadow align">
            <div className="carouselImageContainer">
                <img src={process.env.PUBLIC_URL + '/images/10lineasCodigo.png'} alt="" width="300px"/>
            </div>
            <div>
               <img src={process.env.PUBLIC_URL + '/images/donaldFinal.png'} alt="" width="400px"/>
           </div>
            <div>
               <img src={process.env.PUBLIC_URL + '/images/crazyDogCat.png'} alt="" width="240px"/>
           </div>
            <div>
            <img src={process.env.PUBLIC_URL + '/images/jurassicTv.png'} alt="" width="450px"/>
            </div>
            <div>
               <img src={process.env.PUBLIC_URL + '/images/winnieMail.png'} alt="" width="450px"/>
           </div>
           <div>
               <img src={process.env.PUBLIC_URL + '/images/skinnerExam.png'} alt="" width="450px"/>
           </div>
          </Slider>
        </div>
      );
    }
  }