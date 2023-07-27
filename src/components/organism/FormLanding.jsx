import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Picture from "../atoms/Picture";
import Bar from "../molecules/Bar";
import ShowCase from "../molecules/ShowCase";
import Text from "../atoms/Text";
import '../../assets/styles/LandingPage.css'

function FormLanding() {
    return (
        <>
            <Bar op={1} item={<>
                <nav id='nav-bar'>
                    <ul id="nav-list">
                        <a href="/logina" class='nav-link'>
                            <li>Iniciar Sesión</li>
                        </a>
                    </ul>
                </nav>
                </>}>
            </Bar>
            <ShowCase op={1} item={
                <>
                    <Picture src={"src/assets/img/Logo.gif"} op={1}></Picture>
                    <Text op={1} msn={"Techno Medic"}></Text>
                    <Text op={2} msn={"La tecnología es la medicina del mañana, nosotros somos el futuro"}></Text>
                    <nav id='nav-bar'>
                        <ul id="nav-list2">
                            <a href="/registera" class='nav-link'>
                                <li>Registrarse</li>
                            </a>
                        </ul>
                    </nav>
                </>
            }>
            </ShowCase>
            <Bar op={5} item={<Text op={3} msn={"¿Qué somos?"}></Text>}></Bar>

            <ShowCase op={3} item={

                <>

                    <ShowCase op={2} item={
                        <>
                            <Text op={4} msn={"Somos el inicio de una nueva era de tecnología para la medicina moderna."}></Text>
                            <nav id='nav-bar'>
                                <ul id="nav-list3">
                                    <a href="/registera" class='nav-link'>
                                        <li>Registrate ahora</li>
                                    </a>
                                </ul>
                            </nav>
                        </>
                    }></ShowCase>

                    <ShowCase op={2} item={
                        <>
                            <Picture src={"src/assets/img/analysis-ga178594cb_1280.jpg"} op={1}></Picture>
                        </>
                    }></ShowCase>
                </>

            }></ShowCase>
            <Bar op={5} item={<Text op={3} msn={"¿Qué ofrecemos?"}></Text>}></Bar>
            <ShowCase op={4} item={

                <>
                    <Text op={5} msn={"Ofrecemos una gran cantidad de beneficios exclusivos para ti."}></Text>
                    <Text op={6} msn={"Tehcno Medic es una aplicación web destinada a mejorar la vida de las personas, principalmente a las personas que requieren tener un análisis y un seguimiento semanal sobre su estado de salud en que se encuentra."}></Text>
                    <Text op={6} msn={"Ofrecemos una tecnología avanzada la cual ha sido desarrollada por nuestros ingenieros, la cual gracias a numerosas investigaciones es capaz de analizar la temperatura corporal y pulso cardíaco en tiempo real del usuario."}></Text>
                    <nav id='nav-bar'>
                        <ul id="nav-list3">
                            <a href="/registera" class='nav-link'>
                                <li>¡Somos lo que necesitas!</li>
                            </a>
                        </ul>
                    </nav>
                </>

            }></ShowCase>
            <Bar op={5} item={<Text op={3} msn={"¿Quienes somos?"}></Text>}></Bar>
            <ShowCase op={3} item={

                <>

                    <ShowCase op={5} item={
                        <>
                            <Text op={6} msn={"¡Nosotros somos Techno Medic!"}></Text>
                            <Text op={7} msn={"Nosotros somos un grupo de estudiantes de Ingenieria En Software de la Universidad Politécnica de Chiapas."}></Text>
                            <Text op={7} msn={"Como Ingenieros nuestro objetivo principal como profesionistas en el ambito del desarrollo de software, traemos a realizar este proyecto con el fin de poder aportar una herramienta innovadora la cual mejorara la calidad de vida y de salud de las personas."}></Text>
                            <nav id='nav-bar'>
                                <ul id="nav-list3">
                                    <a href="/registera" class='nav-link'>
                                        <li>¡Registrate ahora!</li>
                                    </a>
                                </ul>
                            </nav>
                        </>
                    }></ShowCase>

                    <ShowCase op={6} item={
                        <>
                            <Picture src={"src/assets/img/stock-g417ce178d_1280.jpg"} op={2}></Picture>
                        </>
                    }></ShowCase>
                </>

            }></ShowCase>
        </>
    );
}

export default FormLanding;