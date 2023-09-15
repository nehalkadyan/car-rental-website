import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carCarousel.css";

const CarCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carCarouselData = [
    {
      id: 0,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg/1200px-2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg",
      name: "Hyundai Creta",
      availability: "Available",
    },
    {
      id: 1,
      url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtPL6K5-BfvvuxlrYVG97V9nZgkBNbRrINN6qVLnyWGCceyqun",
      name: "Honda City",
      availability: "Available",
    },
    {
      id: 2,
      url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230629033347_20230619041149_Seltos%20facelift.jpg&w=700&q=90&c=1",
      name: "Kia Seltos",
      availability: "Available",
    },
    {
      id: 3,
      url: "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg",
      name: "Toyota Innova",
      availability: "Not Available",
    },
    {
      id: 4,
      url: "https://www.globalsuzuki.com/automobile/lineup/ertiga/img/slide/key_img01.jpg",
      name: "Maruti Suzuki Ertiga",
      availability: "Available",
    },
    {
      id: 5,
      url: "https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg",
      name: "Toyota Fortuner",
      availability: "Available",
    },
    {
      id: 6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RhAjNd0sTwgsYKrQVmHPrWrFAUie1Y3FAS1X06aYorqOuLScm9D8GtyQCB2THThRoPE&usqp=CAU",
      name: "Tesla Model S",
      availability: "Not Available",
    },
  ];

  return (
    <div className="car_carousel">
      <div className="carousel_container">
        <h1>Cars Offered By Us:-</h1>
        <p>Tap on the buttons to scroll right and left</p>
        <Carousel className="carousel_card_container" responsive={responsive}>
          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg/1200px-2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg"
                alt="img"
              />
            </div>

            <div className="car_carousel_body">
              <h5>Hyundai Creta</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtPL6K5-BfvvuxlrYVG97V9nZgkBNbRrINN6qVLnyWGCceyqun"
                alt="img"
              />
            </div>

            <div className="car_carousel_body">
              <h5>Honda City</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230629033347_20230619041149_Seltos%20facelift.jpg&w=700&q=90&c=1"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>Kia Seltos</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://www.globalsuzuki.com/automobile/lineup/ertiga/img/slide/key_img01.jpg"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>Maruti Suzuki Ertiga</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>Toyota Fortuner</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RhAjNd0sTwgsYKrQVmHPrWrFAUie1Y3FAS1X06aYorqOuLScm9D8GtyQCB2THThRoPE&usqp=CAU"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>Tesla Model S</h5>
              <h6>Availability : Not Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-456"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>Tata Punch</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Astor/10269/1686570065608/front-left-side-47.jpg?imwidth=280&impolicy=resize"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>MG Astor</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Jimny/6182/1686117643111/front-left-side-47.jpg?imwidth=280&impolicy=resize"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>Maruti Jimny</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/10070/1683262769249/front-left-side-47.jpg?imwidth=280&impolicy=resize"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>Renault Triber</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/10081/1683289602695/front-left-side-47.jpg?imwidth=280&impolicy=resize"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>Renault KWID</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Grand-Vitara/10505/1689588262879/front-left-side-47.jpg?imwidth=280&impolicy=resize"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>Maruti Grand Vitara</h5>
              <h6>Availability : Available</h6>
            </div>
          </div>

          <div className="carousel_card">
            <div className="card_img_container">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Exter/10443/1694584843066/front-left-side-47.jpg?tr=w-456"
                alt="img"
              />
            </div>
            <div className="car_carousel_body">
              <h5>Hyundai Exter</h5>
              <h6>Availability : Not Available</h6>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarCarousel;
