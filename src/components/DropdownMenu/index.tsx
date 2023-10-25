import { Link } from "react-router-dom";
import "./index.scss";
import React, { useContext, useEffect } from "react";
import { Store } from "store";

type DropdownMenu = {
  title?: string;
  itemList: string[];
};

type DropdownMenuProps = {
  title: React.ReactElement;
  menuList: DropdownMenu[];
  place?: "start" | "center" | "end";
};

export default function DropdownMenu({
  title,
  menuList,
  place = "center",
}: DropdownMenuProps) {
  const {
    state: { mode },
  } = useContext(Store);

  useEffect(() => {
    const menuItemList = document.getElementsByClassName("menu-item");
    const dropdownPopupList = document.getElementsByClassName("dropdown-popup");

    if (menuItemList && dropdownPopupList)
      for (const menuItem of menuItemList) {
        menuItem.addEventListener("click", () => {
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
    <div className="dropdown">
      {title}
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
                to={`/catalog/${item.replaceAll(" ", "-").toLowerCase()}`}
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
                <span className="submenu-title">{menu.title}</span>
                {menu.itemList.map((item, index) => (
                  <Link
                    to={`/catalog/${item.replaceAll(" ", "-").toLowerCase()}`}
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
