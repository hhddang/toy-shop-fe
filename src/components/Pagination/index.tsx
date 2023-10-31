import { useState } from "react";
import { Pagination as BPagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function Pagination() {
  const [activePage, setActivePage] = useState(1);
  const numOfPages: number = 10;

  const navigate = useNavigate();
  const changePage = (newPage: number) => {
    const pathname = window.location.pathname;
    const search = window.location.search;
    const newQuery = "page=" + newPage;

    if (search == "") {
      navigate(pathname + "?" + newQuery);
    } else {
      if (search.includes("page=")) {
        const url = pathname + search.replace(/page=[0-9]+/g, newQuery);
        navigate(url);
      } else {
        const url = pathname + search + "&" + newQuery;
        navigate(url);
      }
    }
    setActivePage(newPage);
  };

  const items = [];
  // Show at most 5 pages once
  // Default minPage and maxPage for numOfPages <=5
  let minPage = 1;
  let maxPage = numOfPages;
  // Handle when numOfPages > 5
  if (numOfPages > 5) {
    minPage = Math.min(Math.max(1, activePage - 2), numOfPages - 4);
    maxPage = Math.max(Math.min(numOfPages, activePage + 2), 5);
  }
  for (let page = minPage; page <= maxPage; page++) {
    items.push(
      <BPagination.Item
        key={page}
        active={page === activePage}
        className="page-btn"
        onClick={() => changePage(page)}>
        {page}
      </BPagination.Item>
    );
  }

  return (
    <BPagination>
      <BPagination.Prev
        disabled={activePage == 1}
        onClick={() => changePage(activePage - 1)}
      />
      {items}
      <BPagination.Next
        disabled={activePage == numOfPages}
        onClick={() => changePage(activePage + 1)}
      />
    </BPagination>
  );
}
