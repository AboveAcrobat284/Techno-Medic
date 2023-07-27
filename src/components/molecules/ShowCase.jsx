import { Link } from "react-router-dom";
import styled from 'styled-components';


const ShowCaseConteiner = styled.div`

${props => {
        switch (props.op) {
            case 1:
                return `
                    width: 100%;
                    height: 43vh;
                    position: relative;
                    background: url('src/assets/img/pill-g54a139b75_1280.jpg') no-repeat center center/cover;
                    box-shadow: inset 10px 50px 50px black,inset -10px -50px 50px black;
                    display: flex;
                    flex-direction:column;
                    justify-content: center;
                    align-items: center;
                        
                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 93vh;
                            position: relative;
                            background: url('src/assets/img/medicine-g05295a089_1280.jpg') no-repeat center center/cover;
                            box-shadow: inset 10px 50px 50px black,inset -10px -50px 50px black;
                            display: flex;
                            flex-direction:column;
                            justify-content: center;
                            align-items: center;
                        }
                    `;
            case 2:
                return `
                        width: 100%;
                        height: 43vh;
                        background-color:black;
                        display: flex;
                        flex-direction:column;
                        justify-content: center;
                        align-items: center;
                        padding-left:6%;
                        
                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 73vh;
                            background-color:black;
                            display: flex;
                            
                            justify-content: center;
                            align-items: center;
                        }
                    `;
            case 3:
                return `
                    width: 100%;
                        height: 43vh;
                        background-color:black;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        
                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 73vh;
                            background-color:black;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    `;
            case 4:
                return `
                    width: 100%;
                        height: 43vh;
                        background-color:black;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction:column;
                        
                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 73vh;
                            background-color:black;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    `;
            case 5:
                return `
                    width: 100%;
                        height: 43vh;
                        background-color:black;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction:column;
                        
                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 73vh;
                            background-color:black;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    `;
            case 6:
                return `
                        width: 80%;
                        height: 43vh;
                        background-color:black;
                        display: flex;
                        flex-direction:column;
                        justify-content: center;
                        align-items: center;
                        padding-left:6%;
                        
                        @media(min-width: 1024px) {
                            width: 100%;
                            height: 73vh;
                            background-color:black;
                            display: flex;
                            
                            justify-content: center;
                            align-items: center;
                        }
                    `;
            case 'registroP':
                return `
                        width:100%;
                        height:100%;
                        justify-content: center;
                        align-items: center;
                        display:flex;
                        padding-top:0%;
                        padding-bottom:0%;
                        
                        @media(min-width: 1024px) {
                            width:100%;
                            height:100%;
                            justify-content: center;
                            align-items: center;
                            display:flex;
                            padding-top:0%;
                            padding-bottom:3%;
                        }
                        `;
            case 'LoginH':
                return `
                        width:100%;
                        height:100%;
                        padding-top:50%;
                        padding-bottom:61%;


                        @media(min-width: 1024px) {
                            
                        }
                    `;
            case 'BtnAlone':
                return `
                        width:100%;
                        padding-top:5%;

                        @media(min-width: 1024px) {
                            width:100%;
                            padding-top:8%;
                        }
                    `;
            case 'RegisterH':
                return `
                        width:80%;
                        height:100%;
                        padding-top:13%;
                        padding-bottom:15%;

                        @media(min-width: 1024px) {
                            height:100%;
                            width:37%;
                            padding-top:0%;
                            padding-bottom:0%;
                        }
                    `;
            case 'RegisterBtnTwo':
                return `
                        width:50%;
                        display:flex;

                        @media(min-width: 1024px) {
                            width:100%;
                            display:flex;
                        }
                    `;
            case 'RegisterBtnTwo2':
                return `
                        width:50%;
                        display:flex;

                        @media(min-width: 1024px) {
                            width:100%;
                            display:flex;
                        }
                    `;
            case 'RegisterBtnTwoP':
                return `
                        width:100%;
                        display:flex;
                        gap: 3%;

                        @media(min-width: 1024px) {
                            width:100%;
                            display:flex;
                            gap: 3%;
                        }
                    `;
            case 'LoginP':
                return `}
                        width:100%;
                        height:100%;
                        justify-content: center;
                        align-items: center;
                        display:flex;
                        padding-top:0%;
                        padding-bottom:0%;

                        
                        @media(min-width: 1024px) {
                            width:100%;
                            height:100%;
                            justify-content: center;
                            align-items: center;
                            display:flex;
                            padding-top:0%;
                            padding-bottom:0%;
                        }
                    `;
            case 'registroPDC':
                return `
                        width:100%;
                        height:100%;
                        justify-content: center;
                        align-items: center;
                        display:flex;
                        padding-top:0%;
                        padding-bottom:0%;
                        flex-direction:column;
                        
                        @media(min-width: 1024px) {
                            width:100%;
                            height:100%;
                            justify-content: center;
                            align-items: center;
                            display:flex;
                            padding-top:10%;
                            padding-bottom:10%;
                            flex-direction:column;
                        }
                        `;
            case 'RegisterHPDC':
                return `
                        width:80%;
                        height:100%;
                        padding-top:13%;
                        padding-bottom:15%;

                        @media(min-width: 1024px) {
                            height:100%;
                            width:50%;
                            padding-top:5%;
                            padding-bottom:5%;
                        }
                    `;
            case 'FormHomeP':
                return ` 
                width:100%;
                height:100%;
                justify-content: center;
                align-items: center;
                display:flex;
                        @media(min-width: 1024px) {
                            width:100%;
                            height:100%;
                            justify-content: center;
                            align-items: center;
                            display:flex;
                        }
                    `;
            case 'FormHomeH':
                return ` 
                width:100%;
                height:100%;
                justify-content: center;
                align-items: center;
                display:flex;
                
                
                        @media(min-width: 1024px) {
                            width:100%;
                            height:100%;
                            justify-content: center;
                            align-items: center;
                            display:flex;
                        }
                    `;
            case 'NadVarHome':
                return `
                width:30%;
                height:230vh;
                padding-top:100px;
                background-color:#0F2F4B;
                display:flex;
                flex-direction:column;
                
                        @media(min-width: 1024px) {
                            width:20%;
                            height:320vh;
                            padding-top:340px;
                            background-color:#0F2F4B;
                            display:flex;
                            flex-direction:column;
                        }
                    `;
            case 'Contenido':
                return `     
                width:70%;
                height:230vh;
                        @media(min-width: 1024px) {
                            width:80%;
                            height:320vh;
                        }
                    `;
            case 'ButtonsNadvar':
                return `     
                width:100%;
                height:100%;
                justify-content: center;
                align-items: center;
                display:flex;
                padding-bottom:20%;
                padding-top:5%;
                        @media(min-width: 1024px) {
                            width:100%;
                            height:100%;
                            justify-content: center;
                            align-items: center;
                            display:flex;
                            padding-bottom:20%;
                            padding-top:5%;
                        }
                    `;
            case 'Icon':
                return `     
                width:30%;
                height:100%;
                        @media(min-width: 1024px) {
                            width:20%;
                            height:100%;
                        }
                    `;
            case 'TextIcon':
                return `     
                width:50%;
                height:100%;
                padding-top:11%;
                        @media(min-width: 1024px) {
                            width:50%;
                            height:100%;
                            padding-top:10%;
                        }
                    `;
            case 'HeadHome':
                return `     
                width:100%;
                height:3vh;
                padding-top:18px;
                justify-content: left;
                align-items: center;
                display:flex;
                        @media(min-width: 1024px) {
                            width:100%;
                            height:3vh;
                            padding-top:45px;
                            padding-bottom:120px;
                            justify-content: left;
                            align-items: center;
                            display:flex;
                            padding-right:30px;

                        }
                    `;
            case 'HeadText':
                return `     
                width:45%;
                height:100%;
                padding-top:6px;
                        @media(min-width: 1024px) {
                            width:50%;
                            height:100%;
                            padding-top:6px;
                        }
                    `;
            case 'HeadIcon':
                return `     
                width:10%;
                height:100%; 
    
                        @media(min-width: 1024px) {
                            width:20%;
                            height:100%;
                        }
                         
                    `;
            case 'HomeButtons':
                return `     
                width:100%;
                height:100%;
                justify-content: center;
                align-items: center;
                padding-top:10px;
                padding-left:5px;
                display:flex;
                        @media(min-width: 1024px) {
                            width:100%;
                            height:100%;
                            justify-content: center;
                            align-items: center;
                            padding-top:10px;
                            padding-left:5px;
                            display:flex;
                        }
                    `;
        }
    }
    }
`;
/* border: 2px solid; */



function ShowCase({ item, op }) {
    return (
        <>
            <ShowCaseConteiner op={op}>{item}</ShowCaseConteiner>
        </>

    );
}

export default ShowCase;
