import React, { useState } from 'react'
import useApi from '../../hooks/useApi';
import Separator from '../Separator/Separator';
import styles from "./Banner.module.css"
import { apiEntity } from '../../services/apiConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faCircleInfo} from '@fortawesome/free-solid-svg-icons'





const Banner = () => {
    const [movie, loading, error, randomMovie, backImg] = useApi(apiEntity.popularMovies);
    
    const [description, setDescription] = useState(false);
    
    return (
        <div
        className={`${styles.banner_container}`}
        style={
          loading
            ? { backgroundImage: "none" }
            : {
                backgroundImage: `url(${backImg})`,
              }
        }
      >
          <div className={styles.banner_gradient}>
            
            <Separator height="40%"/>
            <div className={styles.sobreTitulo}>
            <img className={styles.logoNetflix} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png'/>
            <p className={styles.p}>P E L Í C U L A</p>
            </div>
            <div className={styles.banner_title}>
                <h1>{loading? "Loading..." : randomMovie?.title}</h1>
            </div>    

            {description && <div className={styles.banner_description}>
                <h2>{loading? "Loading..." : randomMovie?.overview}</h2>
            </div>}
                        
            <div className={styles.banner_buttons}>
                <button 
                  onClick={() => {
                  console.log(randomMovie?.title);
                  }}
                  className={styles.banner_button}>
                    <div className={styles.iconos}>
                      <FontAwesomeIcon icon={faPlay} />
                      </div>Reproducir
                </button>
                <button
                   onClick={() => {
                    setDescription(true);
                   }}
                  className={styles.banner_button2}>
                    <div className={styles.iconos}>
                      <FontAwesomeIcon icon={faCircleInfo} />
                      </div>Más Información
                </button>
            </div>

            
           
            <Separator height="40px"/>
          
        </div>       
        <Separator height="100px"/>
    </div>
  )
}

export default Banner