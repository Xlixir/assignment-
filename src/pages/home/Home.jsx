import React from "react"
import { Category } from "../../components/category/Category"
import { Order } from "../../components/hero/Order"
import { Slider } from "../../components/hero/Slider"
import { Product } from "../../components/product/Product"
import CardComponent from "../../components/hero/newslid"
import Tslid from "../../components/hero/tslid"
import Carousel from "../../components/hero/Carousel"
import ImageSlider from "../../components/hero/Carousel"
import ProductCarousel from "../../components/hero/ProductCarousel"
import { Categorytwo } from "../../components/category/Categorytwo"

export const Home = () => {
  return (
    <>
      <Slider />
      <CardComponent />
      <Tslid />
      <ImageSlider />
       
       {/* <Order /> */}
      <Category />
      <Categorytwo />
      {/* / */}
    </>
  )
}
