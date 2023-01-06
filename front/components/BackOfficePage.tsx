import React, { useState } from "react";
import styles from '../styles/BackOffice.module.css';
import { ButtonTabComponent } from "my-lib-ui";
import { NextRouter, useRouter } from "next/router";

interface IUser {

    state: string;
    name: string;
    infos: string;
    nationality: string;
    action: boolean;

}


const BackofficePage: React.FC = () => {

    const router: NextRouter = useRouter();

    const handlePage = () => {
        router.push('/admin');
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
            state: "validé",
            name: "karim",
            infos: "5 rue des zeubs",
            nationality: "francaise",
            action: true
        }
    ]


    const types: string[] = ["liste des utilisateurs inscrits", "Liste des véhicles"];
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

                <div>
                    <table>
                        <tr>
                            <th>Statut</th>
                            <th>Nom / Prenom</th>
                            <th>Coordonées</th>
                            <th>Nationalité</th>
                            <th>Action</th>
                        </tr>

                    </table>
                    <tbody>
                        {users.map((user, key) => {
                            return (
                                <tr key={key}>
                                    <td>{user.state}</td>
                                    <td>{user.name}</td>
                                    <td>{user.infos}</td>
                                    <td>{user.nationality}</td>
                                    <td>{user.action}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </div>
            </div>

        </div>
    )
}

export default BackofficePage;