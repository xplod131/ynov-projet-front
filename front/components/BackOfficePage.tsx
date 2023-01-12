import React, { useState } from "react";
import styles from '../styles/BackOffice.module.css';
import { ButtonTabComponent, ButtonComponent } from "my-lib-ui";
import { NextRouter, useRouter } from "next/router";
import wait from './../img/wait.png';
import validate from './../img/validate.png';
import Image from 'next/image'

interface IUser {

    state: string;
    name: string;
    infos: string;
    nationality: string;
    action: boolean;

}

interface IVehicle {
    brand: string,
    model: string,
    action: boolean
}


const BackofficePage: React.FC = () => {



    const router: NextRouter = useRouter();

    const handlePage = () => {
        router.push('/admin');
    }

    const verifyUser = () => {
        console.log('user verified')
    }

    const editUser = () => {
        console.log("edit user")
    }

    const users: IUser[] = [
        {
            state: "validé",
            name: "karim",
            infos: "5 rue des zeubs",
            nationality: "francaise",
            action: true
        },
        {
            state: "en attente",
            name: "karim",
            infos: "5 rue des zeubs",
            nationality: "francaise",
            action: false
        }
    ]

    const vehicles: IVehicle[] = [
        {
            brand: "dacia",
            model: "duster",
            action: true

        },
        {
            brand: "renault",
            model: "clio",
            action: false

        }
    ]


    const types: string[] = ["Liste des utilisateurs inscrits", "Liste des véhicles"];
    // const [vehiclesList, toggleVehiclelist] = useState(true);
    // const [active, setActive] = useState(types[0]);
    return (
        <div className={styles.containerTab}>
            <div className={styles.container}>
                <h1 className={styles.title}>Gestion back office</h1>
                <div className={styles.containerNavigationBackOffice}>
                    {types.map((type) => (
                        <ButtonTabComponent label={type} />
                    ))}
                </div>

                <div className={styles.containerTable}>
                    <table>
                        <tr>
                            <th>Statut</th>
                            <th>Nom / Prenom</th>
                            <th>Coordonées</th>
                            <th>Nationalité</th>
                            <th>Action</th>
                        </tr>
                        <tbody>
                            {users.map((user, key) => {
                                return (
                                    <tr key={key}>
                                        <td><Image src={user.state === "validé" ? validate : wait} alt={'g'} /></td>
                                        <td>{user.name}</td>
                                        <td>{user.infos}</td>
                                        <td>{user.nationality}</td>
                                        <td><ButtonComponent label={user.action ? "éditer" : "vérifier"} onClick={user.action ? editUser : verifyUser} /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={styles.container}>


                <div className={styles.containerTable}>
                    <table>
                        <tr>
                            <th>Marque</th>
                            <th>Modele</th>
                            <th>Action</th>
                        </tr>
                        <tbody>
                            {vehicles.map((vehicle, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{vehicle.brand}</td>
                                        <td>{vehicle.model}</td>
                                        <td><ButtonComponent label={vehicle.action ? "modele" : "vérifier"} onClick={vehicle.action ? editUser : verifyUser} /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default BackofficePage;