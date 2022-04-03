import { Input, InputDiv, SearchButton } from "./searchStyled";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredList } from "../../Redux/action/actions";

const SearchUser = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const searchText = useSelector((state) =>
    state.userReducer.list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilteredList(searchText));
  }, [search]);

  return (
    <InputDiv className="search-box">
      <Input type="text" onChange={handleChange} placeholder="Search" />
      <SearchButton>
        <i className="fa fa-search"></i>
      </SearchButton>
    </InputDiv>
  );
};

export default SearchUser;
