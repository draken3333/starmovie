import React from "react";
import Content from "../components/Content";

import "swiper/css";
import "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const arrTest = [
  {
    imageUrl:
      "https://wallscloud.net/img/resize/1920/1080/MM/2022-09-18-harley-quinn-1-53680.jpeg",
  },
  {
    imageUrl:
      "https://wallscloud.net/img/resize/1920/1080/MM/2022-09-17-wolverine-1-53658.jpeg",
  },
  {
    imageUrl:
      "https://wallscloud.net/img/resize/1920/1080/MM/2022-01-22-4C1E1BF2-59C6-4C4D-AC68-6575E6486B08.jpeg",
  },
  {
    imageUrl:
      "https://wallscloud.net/img/resize/1920/1080/MM/2022-01-16-7EBA3DB1-B90F-405D-90A4-BD0914F17A7F.jpeg",
  },
];

const Intro = () => {
  return (
    <React.Fragment>
      <Swiper slidesPerView={1} modules={[Autoplay]} autoplay={{ speed: 100 }}>
        {arrTest.map((item, index) => (
          <SwiperSlide key={index}>
            <Content {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default Intro;
