import { useDispatch } from "react-redux";
import { deleteAllSelectedUser } from "../../Redux/action/actions";
import Pagination from "./Pagination";
import { FooterDiv, DeleteButton, PaginationDiv } from "./FooterStyled";
import "./Footer.css";

const Footer = () => {
  const dispatch = useDispatch();

  const handleDeleteAllSelectedUsers = () => {
    console.log("Delete all selected users");

    // After Clicking Delete All Selected Users button, all the selected users will be deleted.
    const inputs = document.querySelectorAll('[type="checkbox"]');

    // If there is no selected user, alert message will be shown.
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "checkbox") {
        inputs[i].checked = false;
      }
    }

    dispatch(deleteAllSelectedUser());
  };
  return (
    <FooterDiv className="footer">
      <div className="container">
        <DeleteButton onClick={handleDeleteAllSelectedUsers}>
          Delete Selected
        </DeleteButton>
      </div>
      <PaginationDiv className="pegination">
        <Pagination />
      </PaginationDiv>
      <div className="container">
        <p>{new Date().getUTCFullYear()} © ADMIN</p>
      </div>
    </FooterDiv>
  );
};

export default Footer;