import { strToPath } from "@utils";
import { TOP_CATEGORY_LIST } from "models/category";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          isActive && "text-danger fw-semibold fst-italic"
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
      <Container fluid>
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
      </Container>
    </>
  );
}
