import styled from 'styled-components';

const StyledButton = styled.button`
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
    

    ${props => {
        switch (props.op) {
            case 1:
                return `
                        height: 2em;
                        width: 8.5em;
                        font-size: 1.6rem;
                        background-color: #0A4A82;
                        border: 1px solid white;
                        
                        @media(min-width: 1024px) {
                            height: 2.25em;
                            width: 13.3125em;
                            font-size: 2rem;
                            background-color: #0A4A82;
                            border: 1px solid white;
                        }
                        `;
            case 2:
                return `
                            height: 2.5em;
                            width: 7.5em;
                            font-size: 1.6rem;
                            background-color: #0A4A82;
                            border: 1px solid white;

                            @media(min-width: 1024px) {
                                height: 2.55em;
                                width: 13.3125em;
                                font-size: 2.3rem;
                                background-color: #0A4A82;
                                margin:30px;
                                border: 1px solid white;
                        }
                    `;
            case 3:
                return `
                        height: 2em;
                        width: 17em;
                        font-size: 1rem;
                        background-color: #0A4A82;
                        margin:8px;
                            
                        @media(min-width: 1024px) {
                            height: 2em;
                            width: 16.3125em;
                            font-size: 2.3rem;
                            background-color: #0A4A82;
                        }
                    `;
            case 'BtnAlone':
                return `
/*                 border: 10px solid red;
 */
                    height: 50%;
                    width: 100%;
                    font-size: 1.5rem;
                    background-color: #0A4A82;
                    padding: 12px 10px;
                            
                        @media(min-width: 1024px) {
                            height: 60px;
                            width: 100%;
                            font-size: 2.3rem;
                            background-color: #0A4A82;
                            padding: 7px 10px;
                        }
                    `;
            case 'RegisterBtnTwoU':
                return `
                    height: 40px;
                    width: 100%;
                    padding: 5px 1px;
                    margin: 0;
                    font-size: 1.4rem;
                    background-color: #141414;
                    
                    @media(min-width: 1024px) {
                        height: 53px;
                        width: 100%;
                        font-size: 2rem;
                        background-color: #141414;
                        padding: 5px 15px;
                        }
                    `;
            case 'RegisterBtnTwo':
                return `
                    height: 40px;
                    width: 100%;
                    padding: 5px 1px;
                    margin: 0;
                    font-size: 1.4rem;
                    background-color: #0A4A82;
                    
                    @media(min-width: 1024px) {
                        height: 53px;
                        width: 100%;
                        font-size: 2rem;
                        background-color: #0A4A82;
                        padding: 5px 15px;
                        }
                    `;
            case 'HomeButton':
                return `
                    height: 20px;
                    width: 30%;
                    font-size: 1.2rem;
                    background-color: #0A4A82;
                    
                    @media(min-width: 1024px) {
                        height: 53px;
                        width: 100%;
                        font-size: 2rem;
                        background-color: #0A4A82;
                        }
                    `;
            case 'ButtonDescription':
                return `
                    height: 20px;
                    width: 40%;
                    font-size: 0.7rem;
                    background-color: #0F2F4B;
                    margin-top:5px;
                    
                    @media(min-width: 1024px) {
                        height: 40px;
                        width: 40%;
                        font-size: 1.7rem;
                        background-color: #0F2F4B;
                        margin-top:15px;
                        margin-bottom:15px;
                        }
                    `;
            case 'ButtonLeer':
                return `
                    margin-top:5px;
                    height: 20px;
                    width: 100%;
                    font-size: 1rem;
                    background-color: #0A4A82;
                    
                    @media(min-width: 1024px) {
                        height: 53px;
                        width: 100%;
                        font-size: 2.4rem;
                        background-color: #0A4A82;
                        }
                    `;
            case 'ButtonsEE':
                return `
                    margin-top:5px;
                    height: 15px;
                    width: 45%;
                    font-size: 1rem;
                    margin-left
                    :0.2px;
                    background-color: #0A4A82;
                    
                    @media(min-width: 1024px) {
                        height: 35px;
                        width: 47%;
                        margin-left:1.5px;
                        font-size: 2.4rem;
                        background-color: #0A4A82;
                        }
                    `;
        }
    }
    }
    
`;



function Button({ type, value, op, redirect }) {
    return (
        <StyledButton type={type} op={op} onClick={redirect} >{value}</StyledButton>
    );
}

export default Button;