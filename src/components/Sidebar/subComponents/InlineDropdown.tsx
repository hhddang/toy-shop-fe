import { strToPath } from "@utils";
import { Link } from "react-router-dom";

export default function InlineDropdown({
  title,
  itemList,
  activeKey,
}: {
  title: string;
  itemList: string[];
  activeKey: string;
}) {
  const isActive =
    itemList.filter((item) => strToPath(item) == activeKey).length >= 1 ||
    activeKey == strToPath(title);

  return (
    <div className="inline-dropdown px-0 mb-1">
      <Link
        to={`/catalog/${strToPath(title)}`}
        className={`px-0 d-flex justify-content-between align-items-center w-100 py-1 ${
          isActive ? "text-danger fw-semibold fst-italic" : "border-bottom"
        }`}>
        <span>{title}</span>
        <i
          className={
            isActive ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down"
          }></i>
      </Link>

      <ul className={`m-0 ${isActive ? "d-block" : "d-none"}`}>
        {itemList.map((item, index) => {
          const itemKey = strToPath(item);
          return (
            <li key={index} className="py-1 border-bottom px-2">
              <Link
                to={`/catalog/${strToPath(title)}/${itemKey}`}
                className={`${activeKey == itemKey && "text-danger"}`}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
