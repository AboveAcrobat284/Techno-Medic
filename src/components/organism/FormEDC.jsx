import { Link } from "react-router-dom";
import Text from "../atoms/Text";
import ShowCase from "../molecules/ShowCase";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Label from "../atoms/Label";
import Picture from "../atoms/Picture";
import Bar from "../molecules/Bar";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import '../../assets/styles/table.css'
const socket = socketIOClient("http://3.220.243.236:3010"); // URL de mi API2 (donde esta mi websocket)


function FormEDC() {
    const [sensorData, setSensorData] = useState([]);

    useEffect(() => {
        // Escucha el evento 'connect' para saber cuándo el cliente se conecta al servidor
        socket.on("connect", () => {
            console.log("Client conectado al server");
        });

        // Escucha el evento 'server:all_data' para recibir el listado completo de la base de datos
        socket.on("sen_data", (data) => {
            console.log("Listado completo recibido del servidor:", data);
            setSensorData(JSON.parse(data));
        });

        // Limpia los listeners al desmontar el componente
        return () => {
            socket.off("connect");
            socket.off("sen_data");
        };
    }, []);
    return (
        <>
            <ShowCase op={'registroPDC'} item={

                <>

                    <ShowCase op={'RegisterHPDC'} item={
                        <>
                            <Text msn={"Tabla de resultados medicos"} op={8}></Text>
                            <table class="container">
                                <thead>
                                    <tr>
                                        <th><h1>Pulso Cardiaco</h1></th>
                                        <th><h1>Temperatura</h1></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sensorData.map((sensor) => (
                                        <tr key={sensor.id}>
                                            <td>{sensor.pulso_cardiaco}</td>
                                            <td>{sensor.temperatura}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Bar op={2} item={<>
                                <nav id='nav-bar'>
                                    <ul id="nav-list6">
                                        <a href="/" class='nav-link'>
                                            <li>Salir</li>
                                        </a>
                                    </ul>
                                </nav>
                            </>}>
                            </Bar>
                        </>
                    }></ShowCase>

                </>

            }></ShowCase>
        </>
    );
}

export default FormEDC;