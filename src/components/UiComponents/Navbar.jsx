import styled from "styled-components";

const NavbarDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: #756f6f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  color: #ffffff;
  border-top: 1px solid #ddd;
  position: fixed;
  top: 0;
    z-index: 1;
    @media (max-width: 768px) {
        height: 50px;
    }
`;

const Navbar = () => {
  return (
    <NavbarDiv className="navbar">
      <div className="container">
        <div className="content has-text-centered">
          <h1>ADMIN UI</h1>
        </div>
      </div>
    </NavbarDiv>
  );
};

export default Navbar;
