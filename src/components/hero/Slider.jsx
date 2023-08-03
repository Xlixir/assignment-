// import React from "react"
// import "./slider.css"
// import { slide } from "../../assets/data/data"
// import un from "../../assets/images/un.png"
// import dos from "../../assets/images/dos.png"
// import tres from "../../assets/images/tres.png"
// import quodro from "../../assets/images/quodro.png"

// export const Slider = () => {
//   return (
//     <>
//       <div className='slider'>
//         <div className='container grid'>
//           <img src = {un} />
//           <img src = {dos} />
//           <img src = {tres} />
//           <img src = {quodro} />
//         </div>
//       </div>
//     </>
//   )
// }

import React from "react";
import "./slider.css";
import un from "../../assets/images/un.png";
import dos from "../../assets/images/dos.png";
import tres from "../../assets/images/tres.png";
import quodro from "../../assets/images/quodro.png";

export const Slider = () => {
  return (
    <>
      <div className='slider'>
        <div className='container grid'>
          <div className='card'>
            <img src={un} alt='Image 1' />
            <p className='card-text'>TRACK</p>
          </div>
          <div className='card'>
            <img src={dos} alt='Image 2' />
            <p className='card-text'>WALLET</p>
          </div>
          <div className='card'>
            <img src={tres} alt='Image 3' />
            <p className='card-text'>BLOG</p>
          </div>
          <div className='card'>
            <img src={quodro} alt='Image 4' />
            <p className='card-text'>CONSULT</p>
          </div>
        </div>
      </div>
    </>
  );
};
