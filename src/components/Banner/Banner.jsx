import React from 'react'
import useApi from '../../hooks/useApi';
import Separator from '../Separator/Separator';
import styles from "./Banner.module.css"
import { apiEntity } from '../../apiConfig';


const Banner = () => {
    const [movie, loading, error, randomMovie, backImg] = useApi(apiEntity.popularMovies);
         
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
            <div className={styles.banner_title}>
                <h1>{loading? "Loading..." : randomMovie?.title}</h1>
            </div>
            <Separator height="40px"/>
            <div>
                <h2>{loading? "Loading..." : randomMovie?.overview}</h2>
            </div>
            <div className={styles.banner_buttons}>
                <button className={styles.banner_button}>REPRODUCIR</button>
                <button className={styles.banner_button} onClick={()=>{console.log(movie)}}>MAS INFORMACION</button>
                
            </div>
        </div>
    </div>
  )
}

export default Banner