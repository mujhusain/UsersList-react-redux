import { PaginationButton, PagiButton } from "./FooterStyled";
import { useDispatch, useSelector } from "react-redux";
import { changePaginationPage } from "../../Redux/action/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, list, searchResultList } = useSelector(
    (state) => state.userReducer
  );

  let totalPages = 0;
  //If searchResultList is not empty, then use searchResultList, else use list
  if (searchResultList.length > 0) {
    totalPages = Math.ceil(searchResultList.length / 10);
  } else {
    totalPages = list ? Math.ceil(list.length / 10) : 0;
  }

  return (
    <div className="pagination">
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => dispatch(changePaginationPage(-1))}
      >
        {"<"}
      </PaginationButton>
      {[...Array(totalPages).keys()].map((i) => (
        <PagiButton
          key={i + 1}
          onClick={() => dispatch(changePaginationPage(i + 1))}
          active={currentPage === i+1 ? "active" : null}
        >
          {i + 1}
        </PagiButton>
      ))}
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => dispatch(changePaginationPage(+1))}
      >
        {">"}
      </PaginationButton>
    </div>
  );
};

export default Pagination;
