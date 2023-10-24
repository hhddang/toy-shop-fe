import { Brand } from "../models/brand";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function BrandList({ brandList }: { brandList: Brand[] }) {
  return (
    <Container fluid className="d-flex flex-column gap-3">
      <span className="fw-bold fs-3 text-uppercase">Popular Toy Brands</span>
      <div className="brand-list w-100">
        <Swiper
          className="overflow-y-visible"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={9}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}>
          {brandList.map((brand, index) => (
            <SwiperSlide key={index} className="d-flex justify-content-center">
              <LinkContainer to={`/brand/${brand.name}`}>
                <a>
                  <Image src={brand.image} className="rounded-3"></Image>
                </a>
              </LinkContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
