import {
  Badge,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Nav,
  Navbar,
  ListGroup,
  OverlayTrigger,
  Tooltip,
  Col,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Store } from "../store";

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

  return (
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

      <Navbar
        className="bg-danger d-flex justify-content-center p-0"
        id="sticky-navbar">
        <Nav className="d-flex align-items-center">
          <LinkContainer
            to="/catalog/new-toys"
            className="text-light fw-semibold">
            <Nav.Link>New Toys</Nav.Link>
          </LinkContainer>

          <DropdownMenu
            title="All Toys"
            menuList={[
              {
                title: "Movie Toys",
                itemList: ["Super Heroes", "Monsters", "Robots"],
              },
              {
                title: "Assemble Toys",
                itemList: ["Lego", "SemiBlock", "Others"],
              },
              { title: "Activity Toys", itemList: ["Indoor", "Outdoor"] },
            ]}
          />

          <DropdownMenu
            title="Genders"
            menuList={[{ itemList: ["Boy", "Girl", "Unisex"] }]}
          />

          <DropdownMenu
            title="Ages"
            menuList={[{ itemList: ["0-3 years", "3-12 years", "12 years +"] }]}
          />

          <DropdownMenu
            title="Brands"
            menuList={[{ itemList: ["Lego", "Marvel"] }]}
          />
        </Nav>
      </Navbar>
    </header>
  );
}

type DropdownMenu = {
  title?: string;
  itemList: string[];
};

type DropdownMenuProps = {
  title: string;
  menuList: DropdownMenu[];
};

const DropdownMenu = ({ title, menuList }: DropdownMenuProps) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="danger" className="fw-semibold">
          {title}
        </Dropdown.Toggle>

        {menuList.length <= 1 ? (
          <Dropdown.Menu>
            {menuList[0].itemList.map((item, index) => (
              <Dropdown.Item key={index}>{item}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        ) : (
          <Dropdown.Menu className="p-0">
            <ListGroup horizontal as="div">
              {menuList.map((menu, index) => (
                <ListGroup.Item as="div" className="col-6 px-0" key={index}>
                  <span className="fw-semibold p-3">{menu.title || ""}</span>
                  <ListGroup as="div">
                    {menu.itemList.map((menuItem, index) => (
                      <LinkContainer
                        to={`/catalog/${menuItem
                          .replace(" ", "-")
                          .toLowerCase()}`}
                        className="border-0 px-3 py-1"
                        key={index}>
                        <Dropdown.Item>{menuItem}</Dropdown.Item>
                      </LinkContainer>
                    ))}
                  </ListGroup>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Dropdown.Menu>
        )}
      </Dropdown>
    </>
  );
};

export default Header;
