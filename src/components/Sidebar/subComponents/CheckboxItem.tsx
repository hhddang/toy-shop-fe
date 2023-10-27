import { strToPath } from "@utils";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function CheckboxItem({
  groupName,
  text,
}: {
  groupName: string;
  text: string;
}) {
  const query = {
    key: strToPath(groupName),
    value: strToPath(text),
    string: () => query.key + "=" + query.value,
  };
  const [searchQuery, setSearchQuery] = useState(window.location.search);
  const [url, setUrl] = useState(window.location.href);
  const location = useLocation();
  const isActive = searchQuery.includes(query.string());

  const newUrl = (function () {
    // If search query is not empty
    if (searchQuery) {
      // If this query is existed in search query
      if (searchQuery.includes(query.string())) {
        // Remove query if it is the first
        if (searchQuery.includes("?" + query.string())) {
          return url.replace(query.string(), "").replace("?&", "?");
        }
        // Remove query if it is nth query
        else {
          return url.replace("&" + query.string(), "");
        }
      }
      // If this query is not existed in search query, push nth query
      else {
        return url + "&" + query.string();
      }
    }
    //If search query is empty, push first query
    else {
      return url + "?" + query.string();
    }
  })();

  useEffect(() => {
    setSearchQuery(window.location.search);
    setUrl(window.location.href);
  }, [location]);

  return (
    <Link
      to={newUrl}
      className="checkbox-item py-1 px-0 border-bottom d-flex align-items-center gap-2">
      <input type="checkbox" checked={isActive} onChange={() => {}} />
      <span>{text}</span>
    </Link>
  );
}
