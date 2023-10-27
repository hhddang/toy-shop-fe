import { TOP_CATEGORY_LIST } from "models/category";
import { Container, Row } from "react-bootstrap";
import "./index.scss";
import InlineDropdown from "./subComponents/InlineDropdown";
import PriceRange from "./subComponents/PriceRange";
import CheckboxItem from "./subComponents/CheckboxItem";

const SidebarGroupTitle = ({ children }: { children: string }) => {
  return (
    <span className="text-uppercase fw-semibold p-0 mb-2">{children}</span>
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
          <SidebarGroupTitle>Category</SidebarGroupTitle>
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

        <Row>
          <SidebarGroupTitle>Price</SidebarGroupTitle>
          <PriceRange />
        </Row>

        <Row>
          <SidebarGroupTitle>Gender</SidebarGroupTitle>
          {["Boy", "Girl", "Unisex"].map((item, index) => (
            <CheckboxItem key={index} groupName="Gender" text={item} />
          ))}
        </Row>

        <Row>
          <SidebarGroupTitle>Age</SidebarGroupTitle>
          {["0 to 3 years", "3 to 12 years", "12 years"].map((item, index) => (
            <CheckboxItem key={index} groupName="Age" text={item} />
          ))}
        </Row>

        <Row>
          <SidebarGroupTitle>Brand</SidebarGroupTitle>
          {["Lego", "Pony", "Slimy", "Barbie"].map((item, index) => (
            <CheckboxItem key={index} groupName="Brand" text={item} />
          ))}
        </Row>
      </Container>
    </>
  );
}
