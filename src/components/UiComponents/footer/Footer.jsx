import { useDispatch } from "react-redux";
import { deleteAllSelectedUser } from "../../Redux/action/actions";
import Pagination from "./Pagination";
import { FooterDiv,DeleteButton,PaginationDiv } from "./FooterStyled";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import './Footer.css'


const Footer = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const userList = useSelector((state) => state.userReducer.list);
  const totalPages = userList? Math.ceil(userList.length / 10): 0;

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleDeleteAllSelectedUsers = () => {
    console.log("Delete all selected users");
    
    // After Clicking Delete All Selected Users button, all the selected users will be deleted.
    const inputs = document.querySelectorAll('[type="checkbox"]');

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
          <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </PaginationDiv>
      <div className="container">
          <p >
           {new Date().getUTCFullYear()} © ADMIN
          </p>
        </div>
    </FooterDiv>
  );
};

export default Footer;
