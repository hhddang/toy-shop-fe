import { Badge, Button, Image } from "react-bootstrap";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Toy } from "../models/toy";

const ToyItem = ({ toy }: { toy: Toy }) => {
  const {
    id,
    imageList,
    name,
    price,
    isDiscounted,
    oldPrice,
    discount,
    isNew,
  } = toy;
  const [imgUrl, setImgUrl] = useState(imageList[0]);

  useEffect(() => {
    const toyItem = document.getElementById(`toy-item-${id}`);
    toyItem?.addEventListener("mouseover", () => {
      setImgUrl(imageList[1]);
    });
    toyItem?.addEventListener("mouseout", () => {
      setImgUrl(imageList[0]);
    });
  }, [id, imageList]);

  return (
    <LinkContainer to={`/toy/${id}`}>
      <a id={`toy-item-${id}`}>
        <Image src={imgUrl} className="w-100 p-0"></Image>

        <div className="d-flex flex-column gap-2 p-2">
          <span className="fw-bold">{name}</span>
          <span>SKU: {id}</span>
          <div className="d-flex justify-content-between fw-semibold">
            <span className="text-danger">{price} VND</span>
            {isDiscounted && (
              <span className="text-decoration-line-through">
                {oldPrice} VND
              </span>
            )}
          </div>
        </div>

        {isDiscounted && (
          <Badge bg="danger" className="position-absolute top-0 fs-6 rounded-0">
            {discount}%
          </Badge>
        )}

        {isNew && (
          <Badge
            bg="danger"
            className="position-absolute top-0 end-0 fs-6 rounded-0 z-1">
            New
          </Badge>
        )}
      </a>
    </LinkContainer>
  );
};

export default function ToyCarouselList({
  title,
  toyList,
}: {
  title: string;
  toyList: Toy[];
}) {
  const brandList = ["Lego", "Semiblocks", "Barbie"];
  const mode = localStorage.getItem("mode")!;
  return (
    <>
      <div className="d-flex flex-column">
        <div className="mb-3 d-flex gap-4">
          <span className="fw-bold fs-3 text-uppercase">{title}</span>
          <div className="d-flex gap-3">
            {brandList.map((brand, index) => (
              <LinkContainer to={`catalog/brand/${brand}`} key={index}>
                <Button
                  variant={mode == "light" ? "dark" : "light"}
                  className="border-2">
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
              <SwiperSlide key={index} className="border">
                <ToyItem toy={toy} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
