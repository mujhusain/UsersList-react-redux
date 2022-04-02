import { Input, InputDiv, SearchButton } from "./StyledTableComponents";

const SearchUser = (props) => {
  return (
    <InputDiv className="search-box">
      <Input type="text" placeholder="Search" />
      <SearchButton><i className="fas fa-search"></i></SearchButton>
    </InputDiv>

  );
};

export default SearchUser;