import { Button, Container } from "react-bootstrap";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { LinkContainer } from "react-router-bootstrap";
import { ToyCard } from "@components";
import { Toy } from "@models";

export default function ToyCarouselList({
  title,
  toyList,
}: {
  title: string;
  toyList: Toy[];
}) {
  const brandList = ["Lego", "Semiblocks", "Barbie"];
  return (
    <>
      <Container fluid className="flex-column">
        <div className="mb-3 d-flex gap-4">
          <span className="fw-bold fs-3 text-uppercase">{title}</span>
          <div className="d-flex gap-3">
            {brandList.map((brand, index) => (
              <LinkContainer to={`catalog/brand/${brand}`} key={index}>
                <Button variant="danger" className="border-2">
                  {brand}
                </Button>
              </LinkContainer>
            ))}
          </div>
        </div>

        <div className="toy-list w-100">
          <Swiper
            className="overflow-y-visible"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}>
            {toyList.map((toy, index) => (
              <SwiperSlide key={index}>
                <ToyCard toy={toy} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
}
