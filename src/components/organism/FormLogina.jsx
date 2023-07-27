import { Link, useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import ShowCase from "../molecules/ShowCase";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import '../../assets/styles/LandingPage.css'

function FormLogina() {

    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        navigate('/logina')
    }


    const handlerClick2 = (e) => {
        e.preventDefault();
        navigate('/logint')
    }

    return (
        <>
            <ShowCase op={'LoginP'} item={

                <>

                    <ShowCase op={'LoginH'} item={
                        <>
                            <Text msn={"Iniciar sesión"} op={8}></Text>
                            <Text msn={"Usuario o correo electronico"} op={9}></Text>
                            <Input type={"mail"} op={1} name={"userName"}></Input>
                            <Text msn={"Contraseña"} op={9}></Text>
                            <Input type={"password"} op={1} name={"userPassword"}></Input>
                            <ShowCase op={'BtnAlone'} item={
                                <>
                                    <nav id='nav-bar'>
                                        <ul id="nav-list5">
                                            <a href="/edc" class='nav-link'>
                                                <li>Iniciar Sesión</li>
                                            </a>
                                        </ul>
                                    </nav>
                                </>
                            }></ShowCase>
                            <ShowCase op={'BtnAlone'} item={
                                <>
                                    <nav id='nav-bar'>
                                        <ul id="nav-list4">
                                            <a href="/" class='nav-link'>
                                                <li>Cancelar</li>
                                            </a>
                                        </ul>
                                    </nav>
                                </>
                            }></ShowCase>

                        </>
                    }></ShowCase>

                </>

            }></ShowCase>
        </>
    );
}

export default FormLogina;