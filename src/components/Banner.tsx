import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Image } from "react-bootstrap";

export default function Banner() {
  return (
    <div className="banner w-100">
      <Swiper
        className="overflow-visible"
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade">
        <SwiperSlide>
          <Image src="/src/assets/images/slide1.jpg" className="w-100"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/src/assets/images/slide2.jpg" className="w-100"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/src/assets/images/slide3.jpg" className="w-100"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/src/assets/images/slide4.jpg" className="w-100"></Image>
        </SwiperSlide>
      </Swiper>
    </div>
    // <Carousel>
    //   <Carousel.Item>
    //     <Image src="/src/assets/images/slide1.jpg" className="w-100"></Image>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Image src="/src/assets/images/slide2.jpg" className="w-100"></Image>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Image src="/src/assets/images/slide3.jpg" className="w-100"></Image>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Image src="/src/assets/images/slide4.jpg" className="w-100"></Image>
    //   </Carousel.Item>
    // </Carousel>
  );
}
