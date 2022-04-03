import styled from 'styled-components';

export const InputDiv= styled.div`
border: 1px solid #ddd;
border-radius: 5px;
padding: 5px;
display: flex;
height: 30px;
justify-content: center;
align-items: center;
margin-bottom: 10px;
margin-top: 65px;
`

export const Input = styled.input`
width: 68%;
height: 25px;
font-size: medium;
padding:0 10px;
outline-style: none;
`
export const SearchButton= styled.button`
width: 9%;
background-color: #0B95FE;
color: #fff;
border: none;
border-radius: 5px;
height: 30px;
font-size: medium;
padding:2px 5px;
margin-left: 2vw;
/* Hover on Search Button */
&:hover {
    background-color: #80c1f1;
    outline: none;
    border: #0B95FE;
    cursor: pointer;
}
`