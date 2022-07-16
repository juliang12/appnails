import { useContext, useState } from "react";
import style from "./Search.module.css";

import { TextInputTypes, TodoContextProps } from "models";
import {} from "../../../models/state.model";
import { StateContext } from "../../../context/StateProvider";
import { TYPES } from "../../../reducer";

const Search = ({ label, ...rest }: TextInputTypes) => {
  const { dispatch } = useContext(StateContext) as TodoContextProps;
  const [search, setSearch] = useState("");

  const handleSearch = () => {
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
