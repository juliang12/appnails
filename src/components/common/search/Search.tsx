import { useContext, useState } from "react";
import style from "./Search.module.css";

import { TextInputTypes, TodoContextProps } from "models";
import { StateContext } from "../../../context/StateProvider";
import { TYPES } from "../../../reducer";

const Search = ({ label, ...rest }: TextInputTypes) => {
  const { dispatch } = useContext(StateContext) as TodoContextProps;
  const [search, setSearch] = useState("");

  const handleSearch = (e:React.KeyboardEvent<HTMLInputElement>
  ) => {
    if(e.code === "Enter"){
    dispatch({ types: TYPES.SEARCH_DATA, payload: search });
    }
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
        onKeyDown={(e) => handleSearch(e)}
      />
    </>
  );
};

export default Search;
