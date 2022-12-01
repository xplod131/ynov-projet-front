import Image from 'next/image'
import styles from '../styles/Home.module.css';
import HeaderCars from '../img/HeaderCars.png';
import { InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent } from "my-lib-ui";
import React from "react";
import { NextRouter, useRouter } from 'next/router';

export default function Home() {

    const router: NextRouter = useRouter();

    const handleClick = () => {
        router.push('/');
    };
    return (
        <div className={styles.container}>

            <div className={styles.imageCars}>

                <Image className={styles.img} src={HeaderCars} alt={'g'} />

                <div className={styles.containerText}>
                    <div className={styles.Text}>
                        <span className={styles.arrow}>▷</span> Depuis 2008, RIDE, agence de location de
                        voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes,
                        Saint-Tropez, Courchevel, Saint-Moritz...). Notre expérience est à votre service pour
                        répondre à toutes vos demandes
                    </div>
                </div>

            </div>

            <div className={styles.containerInput}>


                <div className={styles.containerInputBox}>

                    <h2 className={styles.titleInscription}>Inscription</h2>
                    <div className={styles.collage}>
                        <div className={styles.fullwidth}>
                            <RadioButtonComponent label={'Nom'} />
                        </div>
                        <div className={styles.collageItem}>
                            <InputTextComponent label={"Nom"} />
                        </div>
                        <div className={styles.collageItem}>
                            <InputTextComponent label={"Prénom"} />
                        </div>
                        <div className={styles.collageItem}>
                            <InputTextComponent label={"Email"} />
                        </div>
                        <div className={styles.collageItem}>
                            <InputTextComponent label={"Numéro de téléphone"} />
                        </div>
                        <div className={styles.collageItem}>
                            <SelectComponent placeholder={"Sélectionner une valeur"}></SelectComponent>
                        </div>
                        <div className={styles.fullwidth}>
                            <CheckboxComponent label={"fdsfd"} />
                        </div>
                    </div>
                    <div className={styles.buttonFlex}>
                        <div className={styles.buttonFlexChild}>
                            <ButtonComponent label={"Demander mon inscription"} onClick={() => { }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
