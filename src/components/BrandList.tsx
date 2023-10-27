import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrandService } from "@services";

export default function BrandList() {
  const brandList = BrandService.getAll();
  return (
    <Container fluid className="d-flex flex-column gap-3">
      <span className="fw-bold fs-3 text-uppercase">Popular Toy Brands</span>
      <div className="brand-list w-100">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={8}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}>
          {brandList.map((brand, index) => (
            <SwiperSlide key={index} className="d-flex justify-content-center">
              <Link to={`/catalog?brand=${brand.name}`}>
                <Image src={brand.image} className="rounded-3"></Image>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
