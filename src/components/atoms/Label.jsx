import styled from 'styled-components';

const StyledLabel = styled.label`
    

    ${props => {
        switch (props.op) {
            case 1:
                return `
                border-radio:15px;
                height: 100px;
                width: 100%;
                background-color: #0A4A82;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                @media(min-width: 1024px) {
                        border-radio:15px;
                        height: 100px;
                        width: 100%;
                        background-color: #0A4A82;
                        border-radius: 1rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        }
                `;
            case 2:
                return `
                border-radio:15px;
                height: 150px;
                width: 100%;
                background-color: white;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid black;

                @media(min-width: 1024px) {
                        border-radio:15px;
                        height: 150px;
                        width: 100%;
                        background-color: white;
                        border-radius: 1rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 2px solid black;
                        }
                `;
            case 3:
                return `
                border-radio:15px;
                height: 65px;
                width: 100%;
                background-color: #0A4A82;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                @media(min-width: 1024px) {
                        border-radio:15px;
                        height: 65px;
                        width: 100%;
                        background-color: #0A4A82;
                        border-radius: 1rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        }
                `;
        }
    }
    }
    
`;

function Label({ type, value, op, hf}) {
    return (
        <StyledLabel type={type} op={op} htmlFor={hf}><img src={value} alt="" /></StyledLabel>
    );
}

export default Label;