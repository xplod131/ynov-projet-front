import Image from 'next/image'
import styles from '../styles/Home.module.css';
import HeaderCars from '../img/HeaderCars.png';
import {InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent} from "my-lib-ui";
import React from "react";

export default function Home() {
    return (
        <div className={styles.container}>

            <div className={styles.cardImage}>
                <Image src={HeaderCars} className={styles.imageCars} alt={'g'}/>
                <div className={styles.box}>
                    <div className={styles.center}>
                        <div className={styles.cardLogin}>
                            <div className={styles.cardText}>
                                <span className={styles.arrow}>▷</span> Depuis 2008, RIDE, agence de location de
                                voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes,
                                Saint-Tropez, Courchevel, Saint-Moritz...). Notre expérience est à votre service pour
                                répondre à toutes vos demandes
                            </div>

                            <hr className={styles.hr}/>

                            <div className={styles.inscriptionCard}>
                                <h1 className={styles.isncriptionText}>Inscription</h1>
                                <RadioButtonComponent label={'gfdgdf'}/>
                                <div className={styles.row}>

                                    <div className={styles.column}>
                                        <div className={styles.spaceInput}>
                                            <InputTextComponent label={'gfgf'} type={'text'}/>
                                        </div>
                                        <div className={styles.spaceInput}>
                                            <InputTextComponent label={'gfgf'} type={'email'}/>
                                        </div>
                                        <div className={styles.spaceInput}>
                                            <SelectComponent/>
                                        </div>
                                        <div className={styles.spaceInput}>
                                            <CheckboxComponent label={'gfdgfd'}/>
                                        </div>
                                    </div>

                                    <div className={styles.column}>
                                        <div className={styles.spaceInput}>
                                            <InputTextComponent label={'gfgf'}/>
                                        </div>
                                        <div className={styles.spaceInput}>
                                            <InputTextComponent label={'gfgf'}/>
                                        </div>
                                    </div>

                                </div>


                              <div>
                                <ButtonComponent label={'gfdgdf'} onClick={() => {}} />

                              </div>



                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
