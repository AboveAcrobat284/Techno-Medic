import styled from 'styled-components';

const StyledInput = styled.input`

    
    ${props => {
        switch (props.op) {
            case 1:
                return `
                
                        

                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 40px;
                            left: 378px;
                            top: 304px;
                            border-radius: 10px;
                            border: 2px solid #f1f100;
                        }
                    `;
            case 2:
                return `
                        display: none;
                        width: 100%;
                        height: 40px;
                        left: 378px;
                        top: 304px;
                        border-radiu: 10px;

                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 40px;
                            left: 378px;
                            top: 304px;
                            border-radius: 10px;
                        }
                        `;
            case 3:
                return `
                        width: 100%;
                        height: 150px;
                        left: 278px;
                        top: 304px;
                        border-radius: 10px;
                                
        
                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 15  0px;
                            left: 378px;
                            top: 304px;
                            border-radius: 10px;
                        }
                    `;
        }
    }
    }

`;

//Para que este componente sea reutilizable - No se puede llamar igual que el elemento del styled
function Input({ type, op, id,name}) {
    return (
        <StyledInput type={type} op={op} id={id} name={name} />
    );
}

export default Input;
