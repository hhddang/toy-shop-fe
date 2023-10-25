import { useLocation } from "react-router-dom";
import { Breadcrumb as BBreadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect } from "react";

export default function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbList = window.location.pathname
    .split("/")
    .filter((breadcrumb) => breadcrumb != "");
  let path = "";

  useEffect(() => {}, [location]);

  return (
    <>
      <BBreadcrumb>
        <LinkContainer to="/">
          <BBreadcrumb.Item>Home</BBreadcrumb.Item>
        </LinkContainer>
        {breadcrumbList.map((breadcrumb, index) => {
          path += `/${breadcrumb}`;
          return (
            <LinkContainer to={path} key={index}>
              <BBreadcrumb.Item
                active={index == breadcrumbList.length - 1}
                className="text-capitalize">
                {breadcrumb.replaceAll("-", " ")}
              </BBreadcrumb.Item>
            </LinkContainer>
          );
        })}
      </BBreadcrumb>
    </>
  );
}
