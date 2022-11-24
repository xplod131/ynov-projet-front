import React from "react";
import styles from '../../styles/Footer.module.css'

const Footer: React.FC = () => {

    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.containerLinks}>
                    <a>Contact</a>
                    <a>conditions Genéral pdf</a>
                </div>
                <div className={styles.containerDroit}>
                    <p>RIDE 2022 - tout droits reservés</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;