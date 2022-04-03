import { PaginationButton,PagiButton } from "./FooterStyled";
const Pagination = ({ page, totalPages, onPageChange }) => {
    return (
        <div className="pegination">
        <PaginationButton
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
        >
            {"<"}
        </PaginationButton>
        {[...Array(totalPages).keys()].map((i) => (
            <PagiButton
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={page === i + 1 ? "active" : null}
            >
            {i + 1}
            </PagiButton>
        ))}
        <PaginationButton
            disabled={page === totalPages}
            onClick={() => onPageChange(page + 1)}
        >
            {">"}
        </PaginationButton>
        </div>
    );
    };

    export default Pagination;