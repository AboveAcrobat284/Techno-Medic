import styled from 'styled-components';

const StyledTitle = styled.h1`
font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
margin-left:10px;
color:white;
${props => {
        switch (props.op) {
            case 1:
                return `
                        font-size: 1.7rem;
                        text-align: center;
                        line-height: 37px;
                        
                        @media(min-width: 1024px) {
                            font-size: 3.7rem;
                            text-align: center;
                            margin:30px;
                            line-height: 37px;
                        }
                    `;
            case 2:
                return `
                        font-size: 1rem;
                        text-align: center;
                        line-height: 37px;
                        
                        @media(min-width: 1024px) {
                            font-size: 2.5rem;
                            text-align: center;
                            line-height: 37px;
                        }
                    `;
            case 3:
                return `
            
                
                                    
                        @media(min-width: 1024px) {
                            font-size: 2rem;
                            text-align: center;
                            line-height: 37px;
                            animation: neonAnim 2s alternate-reverse infinite;
                color: #F1F100;
                font-size: 2.5rem;
                @keyframes neonAnim {
                from {
                    text-shadow:
                    0 0 10px rgba(241, 241, 0, .7),
                    0 0 6px rgba(241, 241, 0, .7),
                    0 0 0px rgba(241, 241, 0, .7);
                }
                to {
                    text-shadow:
                    0 0 0px rgba(241, 241, 0, .7),
                    0 0 0px rgba(241, 241, 0, .7),
                    0 0 0px rgba(241, 241, 0, .7);
                } 
                        }
                    `;
            case 4:
                return `
                        font-size: 1.3rem;
                        text-align: left;
                        color:#white;
                        line-height: 23px;
                        
                        @media(min-width: 1024px) {
                            font-size: 2.7rem;
                            text-align: left;
                            color:#white;
                            line-height: 30px;
                            padding-left: 4%;
                            margin:4%;
                        }
                    `;
            case 5:
                return `
                        font-size: 1rem;
                        text-align: center;
                        color:white;
                        line-height: 40px;
                        
                        @media(min-width: 1024px) {
                            font-size: 2.3rem;
                            text-align: center;
                            color:white;
                            line-height: 100px;
                        }
                    `;
            case 6:
                return `
                        font-size: 1rem;
                        text-align: justify;
                        color:white;
                        line-height: 16px;
                        padding:1%;
                        padding-right:4%;
                        

                        @media(min-width: 1024px) {
                            font-size: 2rem;
                            text-align: justify;
                            color:white;
                            line-height: 20px;
                            padding:2%;
                        }
                    `;
            case 7:
                return `
                        font-size: 0.9rem;
                        text-align: justify;
                        color:white;
                        line-height: 10px;
                        padding:0%;
                        padding-top:5%;
                        

                        @media(min-width: 1024px) {
                            font-size: 2rem;
                            text-align: justify;
                            color:white;
                            line-height: 20px;
                            padding:2%;
                        }
                    `;
            case 8:
                return `
                           
                        @media(min-width: 1024px) {
                        font-size: 4.5rem;
                        text-align: center;
                        color:#FDFDFD;
                        letter-spacing: 0.25em;
                        }
                    `;
            case 9:
                return `
                
                        
                        @media(min-width: 1024px) {
                            font-size: 2.5rem;
                        text-align: left;
                        color:#F1F100;;
                        line-height: 45px;
                        margin:20px;
                        animation: neonAnim 2s alternate-reverse infinite;

                        @keyframes neonAnim {
                from {
                    text-shadow:
                    0 0 10px rgba(241, 241, 0, .7),
                    0 0 6px rgba(241, 241, 0, .7),
                    0 0 0px rgba(241, 241, 0, .7);
                }
                to {
                    text-shadow:
                    0 0 0px rgba(241, 241, 0, .7),
                    0 0 0px rgba(241, 241, 0, .7),
                    0 0 0px rgba(241, 241, 0, .7);
                }
                        }
                    `;
            case 10:
                return `
                        font-size: 2rem;
                        text-align: left;
                        color:#0F2F4B;
                        line-height: 45px;
                        
                        @media(min-width: 1024px) {
                            font-size: 3rem;
                            text-align: left;
                            color:#0F2F4B;
                            line-height: 50px;
                        }
                    `;
            case 11:
                return `
                        font-size: 2rem;
                        text-align: left;
                        color:#0F2F4B;
                        line-height: 45px;
                        
                        @media(min-width: 1024px) {
                            font-size: 2.3rem;
                            text-align: left;
                            color:#0F2F4B;
                            line-height: 50px;
                        }
                    `;
            case 'TextPDC':
                return `
                        font-size: 2rem;
                        text-align: center;
                        color:#0F2F4B;
                        line-height: 45px;
                        
                        @media(min-width: 1024px) {
                            font-size: 2.5rem;
                            text-align: center;
                            color:#0F2F4B;
                            line-height: 50px;
                        }
                    `;
            case 'TextIcon':
                return `
                        font-size: 0.7rem;
                        text-align: center;                        
                        @media(min-width: 1024px) {
                            font-size: 1.9rem;
                            text-align: center;   
                        }
                    `;
            case 'TextHead':
                return `
                        font-size: 1rem;
                        text-align: center;              
                        color: #0F2F4B;          
                        @media(min-width: 1024px) {
                            padding-top:50px;
                            font-size: 3rem;
                            text-align: center;   
                            color: #0F2F4B;
                        }
                    `;
            case 'TextHeadCursos':
                return `
                        padding-top:25px;
                        font-size: 2.5rem;
                        text-align: center;
                        line-height: 37px;
                        color:#0F2F4B;
                        
                        @media(min-width: 1024px) {
                            font-size: 7.7rem;
                            text-align: center;
                            margin:30px;
                            line-height: 37px;
                            padding-top:25px;
                            padding-bottom:25px;
                        }
                    `;
        }
    }
    }
`;

function Text({ msn, op }) {
    return (
        <StyledTitle op={op}>{msn}</StyledTitle>
    );
}

export default Text;