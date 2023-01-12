import React from "react";
import styles from '../styles/VerifyUser.module.css';
import { ButtonComponent } from "my-lib-ui";
import { NextRouter, useRouter } from "next/router";

interface IUser {

    state: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    nationality: string;
    action: boolean;

}
const VerifyUserPage: React.FC = () => {

    const router: NextRouter = useRouter();
    const user: IUser = {
        state: "validé",
        name: "karim",
        address: "5 rue des zeubs",
        email: "test@email.com",
        phone: "065555555",
        nationality: "francaise",
        action: true
    }

    const verifyUser = () => {
        console.log("user has been verified");
    }

    const handlePage = () => {
        router.push('/verify');
    }
    return (
        <div className={styles.containerPage}>
            <div className={styles.containerModalVerifyUser}>
                <div className={styles.firstBlock}>
                    <h1 className={styles.title}>Vérifier l'utilisateur</h1>
                    <div className={styles.infoUserBlock}>
                        <div className={styles.categoryInfoUser}>
                            Nom / Prénom
                        </div>
                        <div className={styles.infoUser}>
                            <p>{user.name}</p>
                        </div>
                        <div className={styles.categoryInfoUser}>
                            Coordonées
                        </div>
                        <div className={styles.infoUser}>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                        </div>
                        <div className={styles.categoryInfoUser}>
                            Nationalité
                        </div>
                        <div className={styles.infoUser}>
                            <p>{user.nationality}</p>

                        </div>

                    </div>

                </div>
                <div className={styles.endblock}>
                    <div className={styles.actionButton}>
                        <ButtonComponent label={"Vérifier l'utilisateur"} onClick={verifyUser}></ButtonComponent>
                    </div>
                    <div className={styles.actionButton}>
                        <ButtonComponent label={"Supprimer l'utilisateur"} onClick={verifyUser}></ButtonComponent>
                    </div>

                    <span className={styles.cancel}>Annuler</span>
                </div>
            </div>
        </div>
    )

}

export default VerifyUserPage;