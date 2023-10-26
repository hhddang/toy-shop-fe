import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumbs } from "@components";
import Sidebar from "components/Sidebar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CatalogPage() {
  const location = useLocation();
  const [sidebarKey, setSidebarKey] = useState<string | undefined>(undefined);
  useEffect(() => {
    const pathname = window.location.pathname;
    setSidebarKey(pathname.split("/").slice(-1)[0]);
  }, [location]);
  return (
    <>
      <Container fluid className="mt-2">
        <Row>
          <Breadcrumbs />
        </Row>
        <Row>
          <Col className="col-3">
            <Sidebar activeKey={sidebarKey} />
          </Col>
          <Col className="col-9">toy-list</Col>
        </Row>
      </Container>
    </>
  );
}
