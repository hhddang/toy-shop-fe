import { Toy } from "@models";
import { useEffect, useState } from "react";
import { Badge, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ToyItem({ toy }: { toy: Toy }) {
  const {
    id,
    imageList,
    name,
    price,
    isDiscounted,
    oldPrice,
    discount,
    isNew,
    isFavorite,
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
    <div className="border">
      <div className="position-relative">
        <Link to={`/toy/${id}`}>
          <Image src={imgUrl} className="w-100 p-0"></Image>
        </Link>

        <div className="d-flex flex-column gap-2 p-2 bg-light text-dark">
          <Link to={`/toy/${id}`}>
            <span className="fw-bold">{name}</span>
          </Link>
          <div className="d-flex justify-content-between">
            <span>SKU: {id}</span>
            <button>
              <i
                className={
                  isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"
                }></i>
            </button>
          </div>
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
          <Badge
            bg="danger"
            className="position-absolute top-0 start-0 fs-6 rounded-0">
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
      </div>
    </div>
  );
}
