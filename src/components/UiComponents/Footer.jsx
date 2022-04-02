import styled from "styled-components";

const FooterDiv =styled.div`
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
`

const Footer = () => {

    return (
        <FooterDiv className="footer">
        <div className="container">
            <div className="content has-text-centered">
            <button>Delete Selected</button>
            </div>
        </div>
        </FooterDiv>
    );
};

export default Footer;