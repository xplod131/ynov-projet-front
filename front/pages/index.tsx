import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import 'my-lib-ui/dist';
import HeaderCars from '../img/HeaderCars.png';
import {RadioButtonComponent, SelectComponent} from "my-lib-ui";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.cardImage}>
        <Image src={HeaderCars} className={styles.imageCars}  alt={'g'}/>
        <div className={styles.box}>
          <div className={styles.center}>
            <div className={styles.cardLogin}>
              <div className={styles.cardText}>
                <span className={styles.arrow}>▷</span> Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...). Notre expérience est à votre service pour répondre à toutes vos demandes
              </div>

              <hr className={styles.hr} />

              <div className={styles.inscriptionCard}>
                <h1 className={styles.isncriptionText}>Inscription</h1>

                <RadioButtonComponent label={'fd'} />

                <SelectComponent />
                <SelectComponent />

              </div>
            </div>
          </div>
        </div>

      </div>




    
    </div>
  )
}
