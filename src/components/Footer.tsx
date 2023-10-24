import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Image,
} from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid className="mt-5 py-4 px-0 border-top border-danger">
        <Container fluid className="d-flex flex-column gap-4">
          <Row>
            <Col className="col-6">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="fs-4">
                    REGISTER TO RECEIVE PROMOTION INFORMATION
                  </Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="rounded-0"
                    />
                    <Button className={`rounded-0`} variant="danger">
                      Search
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Col>
            <Col className="col-6 d-flex justify-content-end align-items-center gap-4">
              <span className="fs-4">FOLLOW US</span>
              <ListGroup horizontal>
                <ListGroup.Item
                  as="a"
                  href="https://facebook.com"
                  className="border-0">
                  <Image src="/src/assets/social-icons/facebook.png"></Image>
                </ListGroup.Item>
                <ListGroup.Item
                  as="a"
                  href="https://instagram.com"
                  className="border-0">
                  <Image src="/src/assets/social-icons/instagram.png"></Image>
                </ListGroup.Item>
                <ListGroup.Item
                  as="a"
                  href="https://youtube.com"
                  className="border-0">
                  <Image src="/src/assets/social-icons/youtube.png"></Image>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className="d-flex">
            <Col className="d-flex flex-column gap-2">
              <span className="fs-4">Customer Care Hotline</span>
              <span className="fs-3 text-danger">19001900</span>
              <span>Monday to Saturday (8:00 - 17:00)</span>
              <span>Sunday (8:00 - 12:00)</span>
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-envelope fs-2"></i>
                <a href="#" className="bg-transparent border-0">
                  assist@toyme.com.vn
                </a>
              </div>
            </Col>
            <Col className="d-flex flex-column gap-2">
              <span className="fs-4">Terms & Policies</span>
              <div className="d-flex flex-column gap-2">
                <a href="#" className="px-0">
                  Delivery policy
                </a>
                <a href="#" className="px-0">
                  Point accumulation policy
                </a>
                <a href="#" className="px-0">
                  Terms and Conditions
                </a>
              </div>
            </Col>
            <Col className="d-flex flex-column gap-2">
              <span className="fs-4">Customer Support</span>
              <div className="d-flex flex-column gap-2">
                <a href="#" className="px-0">
                  Privacy policy
                </a>
                <a href="#" className="px-0">
                  Warranty policy for returning toys
                </a>
                <a href="#" className="px-0">
                  Payment policy
                </a>
              </div>
            </Col>
            <Col className="d-flex flex-column">
              <span className="fs-4 mb-2">Store Addresses</span>
              <a href="/#">
                <Image src="https://u6wdnj9wggobj.vcdn.cloud/media/wysiwyg/homepage/sub-banner-system-100.jpg"></Image>
              </a>
            </Col>
          </Row>

          <Row className="py-3 text-center">
            <span>
              Viet Tinh Anh Joint Stock Company Business registration number:
              0309132354 issued by the Department of Planning and Investment on
              July 14, 2009
            </span>
            <span>
              Address: 33-35 Street D4, Him Lam New Urban Area, Tan Hung Ward,
              District 7, Ho Chi Minh City
            </span>
            <span>Phone: 0286.2638.600</span>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
