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
import imgProduto from "../../assets/oculos.webp";
import produto from "../../assets/ativo.png";
import produto2 from "../../assets/ativo2.png";

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
               <img src={imgProduto} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={imgProduto} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={imgProduto} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={imgProduto} alt="produto" />
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
               <img src={imgProduto} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={imgProduto} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={imgProduto} alt="produto" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={imgProduto} alt="produto" />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Galeria;
