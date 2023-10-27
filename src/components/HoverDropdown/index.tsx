import { Link } from "react-router-dom";
import "./index.scss";
import { useContext, useEffect } from "react";
import { Store } from "store";

type MenuItem = {
  text: string;
  slug: string;
};

type Menu = {
  title?: string;
  slug?: string;
  itemList: MenuItem[];
};

type Props = {
  title: string;
  slug?: string;
  menuList: Menu[];
  place?: "start" | "center" | "end";
};

export default function HoverDropdown({
  title,
  slug,
  menuList,
  place = "center",
}: Props) {
  const {
    state: { mode },
  } = useContext(Store);

  useEffect(() => {
    const menuItemList = document.getElementsByClassName("menu-item");
    const subMenuTitleList = document.getElementsByClassName("submenu-title");
    const dropdownPopupList = document.getElementsByClassName("dropdown-popup");

    if (menuItemList && dropdownPopupList && subMenuTitleList)
      for (const item of [...menuItemList, ...subMenuTitleList]) {
        item.addEventListener("click", () => {
          for (const dropdownPopup of dropdownPopupList) {
            dropdownPopup.classList.add("d-none");
            setTimeout(() => {
              dropdownPopup.classList.remove("d-none");
            }, 100);
          }
        });
      }
  }, []);

  return (
    <div className="hover-dropdown">
      <button className="fw-semibold text-light">{title}</button>
      <div
        className={`dropdown-popup  ${
          mode == "light" ? "bg-dark text-light" : "bg-light text-dark"
        }
        ${
          place == "start"
            ? "dropdown-popup--start"
            : place == "center"
            ? "dropdown-popup--center"
            : "dropdown-popup--end"
        }
        `}>
        {menuList.length <= 1 ? (
          <div className="single-menu">
            {menuList[0].itemList.map((item, index) => (
              <Link
                to={`/catalog?${slug}=${item.slug}`}
                key={index}
                className={`menu-item ${mode == "light" ? "" : ""}`}>
                {item.text}
              </Link>
            ))}
          </div>
        ) : (
          <div className="multi-menu">
            {menuList.map((menu, index) => (
              <div key={index} className="submenu">
                <Link to={`/catalog/${menu.slug}`} className="submenu-title">
                  {menu.title}
                </Link>
                {menu.itemList.map((item, index) => (
                  <Link
                    to={`/catalog/${menu.slug}/${item.slug}`}
                    key={index}
                    className={`menu-item ${mode == "light" ? "" : ""}`}>
                    {item.text}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
