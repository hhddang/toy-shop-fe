import {
  Badge,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
  Col,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Store } from "../store";
import { HoverDropdown } from "@components";
import { TOP_CATEGORY_LIST } from "models/category";
import { strToPath } from "@utils";
import { useGetAllBrand } from "@hooks/brandHooks";

function Header() {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store);
  const changeMode = () => {
    dispatch({ type: "MODE_CHANGE" });
  };
  const cartItemCount = 2;
  const userInfo = {};
  const [searchText, setSearchText] = useState<string>("");
  console.log(searchText);

  const ALL_TOYS_CATEGORY_DATA: Parameters<
    typeof HoverDropdown
  >[0]["menuList"] = TOP_CATEGORY_LIST.map((topCategory) => {
    return {
      title: topCategory.name,
      slug: strToPath(topCategory.name),
      itemList: topCategory.subCategoryList.map((category) => ({
        text: category.name,
        slug: strToPath(category.name),
      })),
    };
  });

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  useEffect(() => {
    const topNavbar = document.getElementById("top-navbar");
    const stickyNavbar = document.getElementById("sticky-navbar");

    if (topNavbar && stickyNavbar) {
      window.addEventListener("scroll", () => {
        const topNavbarBounding = topNavbar!.getBoundingClientRect();
        if (-topNavbarBounding.y >= topNavbarBounding.height) {
          stickyNavbar?.classList.add("sticky-navbar--active");
        } else {
          stickyNavbar?.classList.remove("sticky-navbar--active");
        }
      });
    }
  }, []);

  const { data: brandList, isLoading, error } = useGetAllBrand();

  return (
    !isLoading &&
    !error && (
      <header>
        <Navbar className={`py-2 shadow-sm`} id="top-navbar">
          <Container fluid>
            <Col>
              <LinkContainer to="/">
                <Navbar.Brand className="fs-2 fw-bold">ToyMe</Navbar.Brand>
              </LinkContainer>
            </Col>

            <Col className="col-5">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Find toys"
                  className="rounded-0"
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <Button
                  variant="danger"
                  className={`rounded-0 border-0 outline-none`}>
                  Search
                </Button>
              </Form>
            </Col>

            <Col>
              <Nav className="d-flex gap-3 align-items-center justify-content-end">
                <OverlayTrigger
                  overlay={<Tooltip>Change theme</Tooltip>}
                  placement="bottom">
                  <Button variant={mode} onClick={changeMode}>
                    <i
                      className={`${
                        mode === "light" ? "fa fa-sun" : "fa fa-moon"
                      } fa-xl`}></i>
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger
                  overlay={<Tooltip>Open Cart</Tooltip>}
                  placement="bottom">
                  <Link
                    to="/cart"
                    className={`nav-link position-relative ${
                      mode === "light" ? "text-dark" : "text-light"
                    }`}>
                    <i className="fa-solid fa-cart-shopping fa-xl"></i>
                    {cartItemCount > 0 && (
                      <Badge
                        pill
                        bg="danger"
                        className="position-absolute top-0 start-100 translate-middle">
                        {cartItemCount}
                      </Badge>
                    )}
                  </Link>
                </OverlayTrigger>

                {userInfo ? (
                  <>
                    <OverlayTrigger
                      overlay={<Tooltip>ToyMe Member</Tooltip>}
                      placement="bottom">
                      <Link
                        to="/member"
                        className={`nav-link ${
                          mode === "light" ? "text-dark" : "text-light"
                        }`}>
                        <i className="fa-solid fa-star fa-xl"></i>
                      </Link>
                    </OverlayTrigger>

                    <DropdownButton
                      variant={mode}
                      align={{ lg: "end" }}
                      title={<i className="fa-solid fa-user fa-xl"></i>}>
                      <LinkContainer to="/profile">
                        <Dropdown.Item>Your Profile</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/profile/history">
                        <Dropdown.Item>Order History</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/profile/wishlist">
                        <Dropdown.Item>Wishlist</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/profile/shipping">
                        <Dropdown.Item>Shipping Address</Dropdown.Item>
                      </LinkContainer>
                    </DropdownButton>
                  </>
                ) : (
                  <Link
                    to="/signin"
                    className={`nav-link ${
                      mode === "light" ? "text-dark" : "text-light"
                    }`}>
                    <i className="fa-solid fa-right-to-bracket fa-xl"></i>
                  </Link>
                )}
              </Nav>
            </Col>
          </Container>
        </Navbar>

        <div
          className="d-flex gap-3 justify-content-center align-items-center bg-danger"
          id="sticky-navbar">
          <LinkContainer
            to="/catalog/new-toys"
            className="text-light fw-semibold">
            <Nav.Link>New Toys</Nav.Link>
          </LinkContainer>

          <HoverDropdown
            title="All Toys"
            place="center"
            menuList={ALL_TOYS_CATEGORY_DATA}
          />

          <HoverDropdown
            title="Gender"
            slug="gender"
            menuList={[
              {
                itemList: [
                  { text: "Boy", slug: "boy" },
                  { text: "Girl", slug: "girl" },
                  { text: "Unisex", slug: "unisex" },
                ],
              },
            ]}
          />

          <HoverDropdown
            title="Age"
            slug="age"
            menuList={[
              {
                itemList: [
                  { text: "0 to 3 years", slug: "0-to-3" },
                  { text: "3 to 12 years", slug: "3-to-12" },
                  { text: "12 years+", slug: "12+" },
                ],
              },
            ]}
          />

          <HoverDropdown
            title="Brand"
            slug="brand"
            menuList={[
              {
                itemList: brandList!.map((brand) => ({
                  text: brand.name,
                  slug: brand.slug,
                })),
              },
            ]}
          />
        </div>
      </header>
    )
  );
}

export default Header;
