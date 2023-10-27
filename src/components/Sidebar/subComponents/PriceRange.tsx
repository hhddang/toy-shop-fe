import { formatPrice } from "@utils";
import { useContext, useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Store } from "store";

export default function PriceRange() {
  const minimum = 0;
  const maximum = 2000000;
  const step = 20000;
  const distancePrice = 100000;
  const [minPrice, setMinPrice] = useState(minimum);
  const [maxPrice, setMaxPrice] = useState(maximum);
  const {
    state: { mode },
  } = useContext(Store);

  const changeMinPrice = (price: number) => {
    if (price <= maxPrice - distancePrice) setMinPrice(price);
  };
  const changeMaxPrice = (price: number) => {
    if (minPrice <= price - distancePrice) setMaxPrice(price);
  };

  // Change search query
  const navigate = useNavigate();

  useEffect(() => {
    const query = `maxPrice=${maxPrice}`;
    const searchQuery = window.location.search;
    const pathname = window.location.pathname;

    // If query is empty
    if (!searchQuery) {
      navigate(pathname + "?" + query);
    }
    // If query is not empty
    else {
      if (!searchQuery.includes("maxPrice")) {
        navigate(pathname + searchQuery + "&" + query);
      } else {
        navigate(pathname + searchQuery.replace(/maxPrice=[0-9]+/g, query));
      }
    }
  }, [maxPrice, navigate]);

  useEffect(() => {
    const query = `minPrice=${minPrice}`;
    const searchQuery = window.location.search;
    const pathname = window.location.pathname;

    // If query is empty
    if (!searchQuery) {
      navigate(pathname + "?" + query);
    }
    // If query is not empty
    else {
      if (!searchQuery.includes("minPrice")) {
        navigate(pathname + searchQuery + "&" + query);
      } else {
        navigate(pathname + searchQuery.replace(/minPrice=[0-9]+/g, query));
      }
    }
  }, [minPrice, navigate]);

  return (
    <Container fluid className="p-0 price-range">
      <Col className="d-flex justify-content-between mb-2">
        <span>{formatPrice(minPrice)}</span>
        <span>{formatPrice(maxPrice)}</span>
      </Col>
      <Col>
        <div className="slider">
          <input
            type="range"
            id="min-btn"
            min={minimum}
            max={maximum}
            step={step}
            value={minPrice}
            onChange={(e) =>
              changeMinPrice(e.target.value as unknown as number)
            }
          />
          <div
            className={`track ${
              mode == "light" ? "bg-dark" : "bg-light"
            }`}></div>
          <input
            type="range"
            id="max-btn"
            min={minimum}
            max={maximum}
            step={step}
            value={maxPrice}
            onChange={(e) =>
              changeMaxPrice(e.target.value as unknown as number)
            }
          />
        </div>
      </Col>
      <Col className="d-flex justify-content-between px-1">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </Col>
    </Container>
  );
}
