import {EffectCoverflow, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";
import img4 from "../image/img4.jpg";
import img5 from "../image/img5.jpg";
import img7 from "../image/img7.jpg";


const HomeCarousel =() => {
    return (
        <Swiper
            modules={[EffectCoverflow, Autoplay, Navigation]}
            speed={1500}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            effect={"coverflow"}
            breakpoints={{
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
                },
            950: {
                slidesPerView: 3,
                spaceBetween: 50,
                },
            }}
            grabCursor={true} 
            loop={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: true
            }}
            navigation={true}
            className="mySwiper"
            >
            <SwiperSlide>
                <img src={img1} alt="dessert"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="dessert"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="dessert"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="dessert"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="dessert"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img7} alt="dessert"/>
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeCarousel;