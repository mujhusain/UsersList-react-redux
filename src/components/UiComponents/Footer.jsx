import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteAllSelectedUser } from "../Redux/action/actions";

const FooterDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  color: #000;
  border-top: 1px solid #ddd;
  position: fixed;
  bottom: 0;
`;

const Footer = () => {
  const dispatch = useDispatch();

  const handleDeleteAllSelectedUsers = () => {
    console.log("Delete all selected users");
    
    // After Clicking Delete All Selected Users button, all the selected users will be deleted.
    const inputs = document.querySelectorAll('[type="checkbox"]');

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        inputs[i].checked = false;
      }
    }

    dispatch(deleteAllSelectedUser());
  };
  return (
    <FooterDiv className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <button onClick={handleDeleteAllSelectedUsers}>
            Delete Selected
          </button>
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;
