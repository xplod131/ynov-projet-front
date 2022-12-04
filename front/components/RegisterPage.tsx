import Image from 'next/image'
import styles from '../styles/Home.module.css';
import HeaderCars from '../img/HeaderCars.png';
import {InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent} from "my-lib-ui";
import React from "react";
import {NextRouter, useRouter} from 'next/router';

export default function RegisterPage() {

    const router: NextRouter = useRouter();

    const handleClick = () => {
        router.push('/confirm-register');
    };

    return (
        <>
            <div className={styles.collage}>
                <div className={styles.fullwidth}>
                    <div>
                        <legend>Je suis :</legend>
                        <br/>
                        <div className="container-select-radio">
                            <RadioButtonComponent label={'Une entreprise'} value={'entreprise'} name={'person_type'}/>
                            <RadioButtonComponent label={'Un particulier'} value={'particulier'} name={'person_type'}/>
                        </div>
                    </div>
                </div>
                <div className={styles.collageItem}>
                    <InputTextComponent label={"Nom"}/>
                </div>
                <div className={styles.collageItem}>
                    <InputTextComponent label={"Prénom"}/>
                </div>
                <div className={styles.collageItem}>
                    <InputTextComponent label={"Email"}/>
                </div>
                <div className={styles.collageItem}>
                    <InputTextComponent label={"Numéro de téléphone"}/>
                </div>
                <div className={styles.collageItem}>
                    <SelectComponent placeholder={"Sélectionner une valeur"} label={'Nationalité'}>
                        <option value="" defaultChecked>Sélectionner une valeur</option>
                    </SelectComponent>
                </div>
                <div className={styles.fullwidth}>
                    <CheckboxComponent label={"fdsfd"}/>
                </div>
            </div>
            <div className={styles.buttonFlex}>
                <div className={styles.buttonFlexChild}>
                    <ButtonComponent label={"Demander mon inscription"} onClick={handleClick} />
                </div>
            </div>
        </>
    )
}
