import styled from 'styled-components';

const StyledTextArea = styled.textarea`

    
    ${
        props => {
            switch(props.op) {
                case 1:
                    return `
                        width: 100%;
                        height: 80px;
                        left: 278px;
                        top: 304px;
                        border-radius: 10px;
                        border: 2px solid black;

                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 100px;
                            left: 378px;
                            top: 304px;
                            border-radius: 10px;
                        }
                    `;
                case 2:
                    return `
                        width: 100%;
                        height: 150px;
                        left: 278px;
                        top: 304px;
                        border-radius: 10px;
                        border: 2px solid black;

                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 150px;
                            left: 378px;
                            top: 304px;
                            border-radius: 10px;
                        }
                    `;
                case 3:
                    return `
                        height: 41px;
                        width: 212px;
                        font-size: 16px;
                    `;
                case 4:
                    return `
                        width: 231px;
                        height: 32px;
                        font-size: 11px;
                    `;
            }
        }
    }

`;

//Para que este componente sea reutilizable - No se puede llamar igual que el elemento del styled
function TextArea({op}) {
    return ( 
        <StyledTextArea op={op}/>
     );
}

export default TextArea;
