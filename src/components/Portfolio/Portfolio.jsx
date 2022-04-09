import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import cheznico from "../../img/cheznico.png";
import koreanProject from "../../img/koreanproject.png";
import syudata from "../../img/syudata.png";
import medic from "../../img/medic.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={cheznico} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={koreanProject} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={medic} alt="" style={{ height:"200px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={syudata} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
