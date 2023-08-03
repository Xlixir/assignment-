import React from "react";
import Slider from "react-slick";
import "./Categorytwo.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { category } from "../../assets/data/data";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
}

export const Categorytwo = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="category">
      <div className="container">
        <h2 className="category-title">Hair Care</h2> 
        
        <Slider {...settings}>
          {category.map((item) => (
            <div className="boxs" key={item.id}>
              <div className="box boxItems">
                <img src={item.cover} alt="" />
                <div className="product-details">
                  <p className="product-name">{item.title}</p>
                  <div className="rating">
                    {/* Add star icons based on product's rating */}
                    <span className="rating-stars">★★★★★</span>
                    <span className="rating-number">(4.8)</span>
                  </div>
                  <div className="price">
                    <span className="discounted-price">₹999</span>
                    <span className="original-price">₹1598</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button className="view-all">View All</button>
      </div>
    </section>
  );
};
