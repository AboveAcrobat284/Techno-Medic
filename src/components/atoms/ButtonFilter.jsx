import styled from "styled-components";

const StyledButtonFilter = styled.button`
    font-family: 'Ubuntu';
    background: var(--primary-color);
    color: #fff;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    border-radius: 10px;    
    
    height: 20px;
    width: 100%;
    font-size: 0.8rem;
    background-color: #0A4A82;

    @media(min-width: 1024px) {
        font-family: 'Ubuntu';
        background: var(--primary-color);
        color: #fff;
        text-align: center;
        border: none;
        cursor: pointer;
        margin-right: 0.5rem;
        transition: opacity 0.2s ease-in;
        outline: none;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
        border-radius: 10px;


        height: 53px;
        width: 100%;
        font-size: 2rem;
        background-color: #0A4A82;
     }
`;

function ButtonFilter({type, value, category, filterCategory, btnCatHome, funcion}) {
    return ( 
        <StyledButtonFilter type={type} key={category} onClick={btnCatHome ? funcion : () => filterCategory(category)}  >{value}</StyledButtonFilter>
     );
}

export default ButtonFilter;