import React, { useRef, useState } from "react";
import styles from "./Galeria.module.css";

//  SwiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Imagens
import prd1 from "../../assets/prd3.webp";
import prd2 from "../../assets/prd2.webp";
import prd3 from "../../assets/prd1.webp";
import prd5 from "../../assets/prd5.jpg";

const Galeria = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

   return (
      <div id={styles.ct}>
         <Swiper
            style={{
               "--swiper-navigation-color": "#000",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={thumbsSwiper !== null ? { swiper: thumbsSwiper } : undefined}
            modules={[FreeMode, Navigation, Thumbs]}
            className={"mySwiper2"}
         >
            <SwiperSlide>
               <img src={prd1} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={prd2} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={prd3} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={prd5} alt="produto" />
            </SwiperSlide>
         </Swiper>
         <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={"mySwiper"}
         >
            <SwiperSlide>
               <img src={prd1} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={prd2} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={prd3} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={prd5} alt="produto" />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Galeria;
