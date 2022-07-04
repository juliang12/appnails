import { StateContext } from "context/StateProvider";
import React, { useContext, useState } from "react";
import style from "./Search.module.css";
import { TYPES } from "reducer";

const Search = ({ label, ...rest }) => {
  const { dispatch } = useContext(StateContext);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    if (e.key === "ESCAPE") {
      return (e.target.value = "");
    }
    dispatch({ types: TYPES.SEARCH_DATA, payload: search });
  };

  return (
    <>
      <label className={style.label}>{label}</label>
      <input
        {...rest}
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleChange}
      />
    </>
  );
};

export default Search;
