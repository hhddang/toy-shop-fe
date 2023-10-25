import { Link } from "react-router-dom";
import "./index.scss";
import React, { useContext } from "react";
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
  return (
    <div className="dropdown">
      {title}
      {/* <button className="bg-transparent border-0 fw-semibold text-light">
        {title}
      </button> */}
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
                to={`/catalog/${item.toLocaleLowerCase()}`}
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
                    to={`/catalog/${item.toLocaleLowerCase()}`}
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
