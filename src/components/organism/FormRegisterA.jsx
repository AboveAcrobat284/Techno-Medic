import { Link, useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import ShowCase from "../molecules/ShowCase";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useRef } from "react";


function FormRegisterA() {
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        navigate('/registera')
    }


    const handlerClick2 = (e) => {
        e.preventDefault();
        navigate('/registert')
    }





    /* register */


    const endpoint = "http://3.220.150.187/user/create";

    const form = useRef();


    const clickHandler = (e) => {
        e.preventDefault();
        const newForm = new FormData(form.current);
        if (
            newForm.get("firstName") === null ||
            newForm.get("lastName") === null ||
            newForm.get("eMail") === null ||
            newForm.get("userName") === null ||
            newForm.get("userPassword") === null
        ) {

            alert("campos vacios");
        } else {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");

            // var raw = JSON.stringify({
            //   name: "Pozo",
            //   name_users: "Alan",
            //   email: "alan@gmail.com",
            //   matricula: "221230",
            //   password: "alan22",
            //   confirmpassword: "alan22",
            // });

            var raw = JSON.stringify({
                firstName: newForm.get("firstName"),
                lastName: newForm.get("lastName"),
                eMail: newForm.get("eMail"),
                userName: newForm.get("userName"),
                userPassword: newForm.get("userPassword")
            });

            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            fetch("http://3.220.150.187/user/create", requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error));

            //Codigo borrado

            alert("Registro exitoso ! ")

            navigate("/");
        }
    };

    return (
        <>
            <ShowCase op={'registroP'} item={

                <>

                    <ShowCase op={'RegisterH'} item={
                        <>
                            <Text msn={"REGISTRATE"} op={8}></Text>
                            <form ref={form}>
                                <Text msn={"Nombre"} op={9}></Text>
                                <Input type={"text"} op={1} name={"firstName"}></Input>
                                <Text msn={"Apellidos"} op={9}></Text>
                                <Input type={"text"} op={1} name={"lastName"}></Input>
                                <Text msn={"Correo Electrónico"} op={9}></Text>
                                <Input type={"mail"} op={1} name={"eMail"}></Input>
                                <Text msn={"Nombre de usuario"} op={9}></Text>
                                <Input type={"text"} op={1} name={"userName"}></Input>
                                <Text msn={"Contraseña"} op={9}></Text>
                                <Input type={"password"} op={1} name={"userPassword"}></Input>

                                <ShowCase op={'BtnAlone'} item={
                                    <>
                                        <nav id='nav-bar'>
                                            <ul id="nav-list5">
                                                <a href="/" class='nav-link'>
                                                    <li>Registrarse</li>
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
                            </form>
                        </>
                    }></ShowCase>

                </>

            }></ShowCase>
        </>
    );
}

export default FormRegisterA;