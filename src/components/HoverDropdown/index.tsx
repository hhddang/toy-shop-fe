import { Link } from "react-router-dom";
import "./index.scss";
import { useContext, useEffect } from "react";
import { Store } from "store";
import { strToPath } from "@utils";

type Menu = {
  title?: string;
  itemList: string[];
};

type Props = {
  title: string;
  menuList: Menu[];
  place?: "start" | "center" | "end";
};

export default function HoverDropdown({
  title,
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
                to={`/catalog/${strToPath(item)}`}
                key={index}
                className={`menu-item ${mode == "light" ? "" : ""}`}>
                {item}
              </Link>
            ))}
          </div>
        ) : (
          <div className="multi-menu">
            {menuList.map((menu, index) => (
              <div key={index} className="submenu">
                <Link
                  to={`/catalog/${strToPath(menu.title!)}`}
                  className="submenu-title">
                  {menu.title}
                </Link>
                {menu.itemList.map((item, index) => (
                  <Link
                    to={`/catalog/${strToPath(menu.title!)}/${strToPath(item)}`}
                    key={index}
                    className={`menu-item ${mode == "light" ? "" : ""}`}>
                    {item}
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
