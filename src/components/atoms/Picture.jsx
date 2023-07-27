import styled from "styled-components";

const StyledImg = styled.img`
    ${
        props => {
            switch(props.op) {
                case 1:
                    return `
                        height: 30%;

                        @media(min-width: 1024px) {
                            height: 40%;
                        }
                    `;
                case 2:
                    return `
                        height: 50%;

                        @media(min-width: 1024px) {
                            height: 70%;
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
                case 'IconsNadvar':
                    return `
                        width: 100%;
                        height: 30px;
                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 45px;
                        }
                    `;
                case 'IconHead':
                    return `
                        width: 100%;
                        height: 30px;
                        padding-bottom:10px;
                        padding-right:0px;
                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 100px;
                            padding-right:120px;
                            
                        }
                    `;
                case 'HomePicture':
                    return `
                        width: 100%;
                        height: 200px;
                        padding-top:35px;
                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 600px;
                        }
                    `;
                case 'Publicar':
                    return `
                        width: 100%;
                        height: 30px;
                        padding-bottom:10px;
                        padding-right:0px;
                        margin-left:80px;

                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 150px;
                            margin-left:110px;
                        }
                    `;
            }
        }
    }
`;

function Picture({src, op}) {
    return (
        <StyledImg src={src} op={op}></StyledImg>
    );
}




export default Picture;
