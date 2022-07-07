import { StateContext } from "context/StateProvider";
import React, { useContext, useEffect, useState } from "react";
import style from "./Search.module.css";
import { TYPES } from "reducer";

const Search = ({ label, ...rest }) => {
  const { dispatch, stateApp } = useContext(StateContext);
  const { db } = stateApp;
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    dispatch({ types: TYPES.SEARCH_DATA, payload: search });
  };

  return (
    <>
      <label className={style.label}>{label}</label>
      <input
        {...rest}
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleSearch}
      />
    </>
  );
};

export default Search;
