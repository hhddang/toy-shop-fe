import { formatPrice, strToPath } from "@utils";
import { TOP_CATEGORY_LIST } from "models/category";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "store";
import { useContext } from "react";
import "./index.scss";

const SidebarItemTitle = ({ children }: { children: string }) => {
  return (
    <span className="text-uppercase fw-semibold p-0 mb-2">{children}</span>
  );
};

const InlineDropdown = ({
  title,
  itemList,
  activeKey,
}: {
  title: string;
  itemList: string[];
  activeKey: string;
}) => {
  const isActive =
    itemList.filter((item) => strToPath(item) == activeKey).length >= 1 ||
    activeKey == strToPath(title);

  return (
    <div className="inline-dropdown px-0 mb-1">
      <Link
        to={`/catalog/${strToPath(title)}`}
        className={`px-0 d-flex justify-content-between align-items-center w-100 py-1 ${
          isActive ? "text-danger fw-semibold fst-italic" : "border-bottom"
        }`}>
        <span>{title}</span>
        <i
          className={
            isActive ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down"
          }></i>
      </Link>

      <ul className={`m-0 ${isActive ? "d-block" : "d-none"}`}>
        {itemList.map((item, index) => {
          const itemKey = strToPath(item);
          return (
            <li key={index} className="py-1 border-bottom px-2">
              <Link
                to={`/catalog/${strToPath(title)}/${itemKey}`}
                className={`${activeKey == itemKey && "text-danger"}`}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const PriceRange = () => {
  const minimum = 0;
  const maximum = 5000000;
  const step = 50000;
  const [minPrice, setMinPrice] = useState(minimum);
  const [maxPrice, setMaxPrice] = useState(maximum);
  const {
    state: { mode },
  } = useContext(Store);

  const changeMinPrice = (price: number) => {
    if (price < maxPrice) setMinPrice(price);
  };
  const changeMaxPrice = (price: number) => {
    if (price > minPrice) setMaxPrice(price);
  };

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
        <span>|</span>
      </Col>
    </Container>
  );
};

export default function Sidebar({
  activeKey = "Super Heroes",
}: {
  activeKey?: string;
}) {
  const SIDEBAR_CATEGORY_DATA = TOP_CATEGORY_LIST.map((topCategory) => {
    return {
      title: topCategory.name,
      itemList: topCategory.subCategoryList.map((category) => category.name),
    };
  });

  return (
    <>
      <Container fluid className="d-flex flex-column gap-4">
        <Row className="d-flex flex-column">
          <SidebarItemTitle>Category</SidebarItemTitle>

          <div className="d-flex flex-column p-0">
            {SIDEBAR_CATEGORY_DATA.map((category, index) => (
              <InlineDropdown
                title={category.title}
                itemList={category.itemList}
                activeKey={activeKey}
                key={index}
              />
            ))}
          </div>
        </Row>

        <Row className="">
          <SidebarItemTitle>Price</SidebarItemTitle>
          <PriceRange />
        </Row>
      </Container>
    </>
  );
}
