import React from "react";
import styles from '../styles/Login.module.css';
import {ButtonComponent, InputTextComponent} from "my-lib-ui";
import Link from "next/link";

const Login: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.center}>
                    <Link className={styles.backButton} href={'/'}>
                        <span className={styles.arrow}>←</span> retour
                    </Link>
                    <div>
                        <div className={styles.cardLogin}>
                            <h1 className={styles.loginText}>Connexion</h1>
                            <div className={styles.containerForm}>
                                <div className={styles.spaceItems}>
                                    <InputTextComponent label={'fdgfdgf'} />
                                </div>
                                <div className={styles.spaceItems}>
                                    <InputTextComponent label={'fdgfdgf'} />
                                </div>
                                <ButtonComponent label={'fdgfd'} onClick={() => {}} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login;