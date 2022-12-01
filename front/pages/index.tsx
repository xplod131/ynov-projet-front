import Image from 'next/image'
import styles from '../styles/Home.module.css';
import HeaderCars from '../img/HeaderCars.png';
import {InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent} from "my-lib-ui";
import React from "react";
import {NextRouter, useRouter} from 'next/router';
import ConfirmRegister from "./ConfirmRegister";

export default function Home() {

    const router: NextRouter = useRouter();

    const handleClick = () => {
        router.push('/');
    };
    return (
        <div className={styles.container}>

            <div className={styles.imageCars}>

                <Image className={styles.img} src={HeaderCars} alt={'g'}/>

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

                    <ConfirmRegister />
                    

                    <div className={styles.collage}>
                        <div className={styles.fullwidth}>
                            <RadioButtonComponent label={'gfdgdf'}/>
                        </div>
                        <div className={styles.collageItem}>
                            <InputTextComponent label={"fdsfd"}/>
                        </div>
                        <div className={styles.collageItem}>
                            <InputTextComponent label={"fdsfd"}/>
                        </div>
                        <div className={styles.collageItem}>
                            <InputTextComponent label={"fdsfd"}/>
                        </div>
                        <div className={styles.collageItem}>
                            <InputTextComponent label={"fdsfd"}/>
                        </div>
                        <div className={styles.collageItem}>
                            <SelectComponent ></SelectComponent>
                        </div>
                        <div className={styles.fullwidth}>
                            <CheckboxComponent label={"fdsfd"}/>
                        </div>
                    </div>
                    <div className={styles.buttonFlex}>
                        <div className={styles.buttonFlexChild}>
                            <ButtonComponent label={"fdsfd"} onClick={() => {}}/>
                        </div>
                    </div>
                </div>


                {/*                   <div className={styles.columnContainer1}>


                        <ConfirmRegister />

                        <div className={styles.element}>
                            <RadioButtonComponent label={'gfdgdf'} />
                        </div>
                        <div className={styles.element}>
                            <InputTextComponent label={'nom'} type={'text'} />
                        </div>
                        <div className={styles.element}>
                            <InputTextComponent label={'email'} type={'mail'} />
                        </div>
                        <div className={styles.element}>
                            <CheckboxComponent label={'gfdgfd'} />
                        </div>

                    </div>
                    <div className={styles.columnContainer2}>
                        <div className={styles.column2Input}>
                            <div className={styles.element}>
                                <InputTextComponent label={'prénom'} type={'text'} />
                            </div>
                            <div className={styles.element}>
                                <InputTextComponent label={'numéro de teléphone'} type={'text'} />
                            </div>
                        </div>
                        <div className={styles.inscriptionButton}>
                            <ButtonComponent onClick={handleClick} label={'Demander mon inscription'} />
                        </div>

                    </div>
                </div>

            </div>
*/}

                {/*            <div className={styles.cardImage}>
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

            </div>*/}


            </div>
        </div>
    )
}
