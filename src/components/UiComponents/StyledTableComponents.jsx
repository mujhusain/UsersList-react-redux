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
height: 29px;
font-size: medium;
padding:2px 5px;
margin-left: 2vw;
/* Hover on Search Button */
&:hover {
    background-color: #ddd;
    outline: none;
    border: #ddd;
    cursor: pointer;
}
`
export const Table = styled.table`
width: 80%;
margin: 0 auto;
border: 1px solid #ddd;
border-collapse: collapse;
/* Table head style */
& thead tr th {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    background-color: #ddd;
}
/* Table Body Style */
& tbody tr td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
}
/* Edit and Delete button styling */
& tbody tr td:nth-child(5) button {
    margin-right: 0.5vw;
    border: none;
    cursor: pointer;
    background-color: transparent;
}
/* hover button effect */
& tbody tr td:nth-child(5) button:hover {
    outline: none;
    height: 30px;
    width: 30px;
    background-color: #ffffff;
    border-radius: 50%;
}
& tbody tr td:nth-child(1) {
    width: 10vw;
}
/* CheckBox styling */
& tbody tr td:nth-child(1) input {
    cursor: pointer;
}
& tbody tr:hover {
    background-color: #f2f2f2;
}
`