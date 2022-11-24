import React from "react";
import styles from '../styles/Login.module.css';


const Login: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.backButton}>
                    <span className={styles.arrow}>←</span> retour
                </div>
                <div>
                    <div className={styles.cardLogin}>
                        <h1 className={styles.loginText}>Connexion</h1>
                        <div className={styles.containerForm}>
                                        INSERT COMPONENTS
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login;