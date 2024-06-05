import { Form, useSearchParams } from "react-router-dom";
import SearchSVG from "../SearchSVG/SearchSVG";
import { useId, useState } from "react";
import style from "./SearchBar.module.css";

function SearchBar() {
  const [searchParams] = useSearchParams();
  const [searchTag, setSearchTag] = useState(searchParams.get("tag") || "");
  const id = useId();

  const editSearch = (e) => {
    setSearchTag(e.target.value);
  };

  return (
    <Form
      className={style.searchForm}
      role="search"
      method="GET"
      action={`/search/?${searchTag.replace(/\s/g, "+")}`}
    >
      <label htmlFor={id}>
        <SearchSVG />
      </label>
      <input
        id={id}
        className={style.input}
        type="search"
        name="tag"
        value={searchTag}
        onInput={editSearch}
        placeholder="Search by tag"
      />
      <button className={style.btn}>Search</button>
    </Form>
  );
}

export default SearchBar;
