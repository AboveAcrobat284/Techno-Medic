import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonFilter from "../atoms/ButtonFilter";

const StyledSearch = styled.div`
    margin-top: ${ props => (props.homeSearch) ? '10%' : '1%' };
    margin-left:16px;
    width: ${ props => (props.homeSearch) ? '80%' : '90%' } ;
    min-height: 0.5%;
    display: flex;
    align-items: center;
    gap: 2%;
    background-color: ${ props => (props.homeSearch) ? '#5caeffc9' : 'transparent' };

    .buttons{
        width: 48%;
        margin-bottom: ${ props => (props.homeSearch) ? '0' : '3%' };
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        @media(min-width: 1024px) {
        width: 100%;
        margin-bottom: ${ props => (props.homeSearch) ? '0' : '3%' };
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8rem;
        margin-left:86px;
        margin-right:10px;
        margin-top:30px;
        }
    }

    .search{
        width: 50%;
        margin-bottom: ${ props => (props.homeSearch) ? '0' : '3%' };
        padding: .4rem 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: ${ props => (props.homeSearch) ? 'none' : 'solid 1px #5caeffc9' };
        border-radius: .6rem;
        background-color: #FFFFFF;
    }

    .search .inputSearch{
        width: 85%;
        padding: .9rem .9rem .9rem 0;
        border: none;
        border-radius: .5rem;
        font-size: 1rem;
        outline: none; /* --> Quita marcos del input al seleccionarlo*/
    }
    .search .btn_search{
        padding: .3rem .8rem .2rem;
        margin-left: 1rem;
        font-family: 'Harmattan';
        font-style: normal;
        font-weight: 700;
        font-size: 1.3rem;
        color: #2E97FF;
        border: 2px solid #2E97FF;
        border-radius: 1.5rem;
        background-color: transparent;
        transition: all .4s ease-in;
    }
    .search .btn_search:hover{
        background-color: #2E97FF;
        color: white;
    }
    

    @media screen and (max-width:1024px){
        width: 90%;
        padding: .5rem .8rem;
        margin-top: ${ props => (props.homeSearch) ? '35%' : '1%' };
        display: flex;
        flex-wrap: wrap;
        grid-gap: 1rem;
        
        .buttons{
            width: 100%;
            gap: 1rem;
        }
        
        .search{
            width: 100%;
            padding: .2rem .6rem;
        }
        
        .search .inputSearch{
            width: 80%;
            font-size: .8rem;
        }
        .search .btn_search{
            padding: .2rem .4rem .1rem;
            margin-left: 0;
            font-size: 1rem;
        }   
    }
`

function Search({homeSearch,BtnTodos, categories, filterCategory}) {
    const navigate = useNavigate();

    const handlerCatalog = (e)=> {
        e.preventDefault();
        location.reload("/home");
    }
    
    const handlerCatalogFiltered = (e)=> {
        e.preventDefault();
        navigate("/catalogofiltrado");
    }

    return ( 
        <StyledSearch homeSearch={homeSearch} >
            <div className="buttons">
                {(BtnTodos)? <ButtonFilter type="button" value={'TODOS'} btnCatHome={true} funcion={handlerCatalog} /> : ''}
                {
                    categories.map(category => (
                        <ButtonFilter type="button" key={category}  value={category} category={category} filterCategory={filterCategory}  btnCatHome={homeSearch} funcion={handlerCatalogFiltered}  />
                    ))
                }
                {/* <ButtonFilter type="button" value="Catalogo" handlerClick={"handlerClick"} active />
                <ButtonFilter type="button" value="Ventas" handlerClick={"handlerClick"} active />
                <ButtonFilter type="button" value="Rentas" handlerClick={"handlerClick"} active />
                <ButtonFilter type="button" value="Remates" handlerClick={"handlerClick"} active /> */}
            </div>
        </StyledSearch>
     );
}

export default Search;