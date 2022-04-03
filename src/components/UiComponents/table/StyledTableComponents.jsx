import styled from 'styled-components';


export const Table = styled.table`
width: 80%;
margin: 0 auto;
border: 1px solid #ddd;
border-collapse: collapse;
margin-bottom: 3.5rem;
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
    outline: none;
    height: 30px;
    width: 30px;
    background-color: transparent;
    cursor: pointer;
}
/* hover button effect */
& tbody tr td:nth-child(5) button:hover {
    outline: none;
    color: red;
    background-color: #000000;
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