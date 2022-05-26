import React from 'react'
import styles from './Buttons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faCircleInfo} from '@fortawesome/free-solid-svg-icons'

const Buttons = () => {
  return (
    <div>
        <div className={styles.banner_buttons}>
                <button className={styles.banner_button}><div className={styles.iconos}><FontAwesomeIcon icon={faPlay} /></div>Reproducir</button>
                <button className={styles.banner_button2}><div className={styles.iconos}><FontAwesomeIcon icon={faCircleInfo} /></div>Más Información</button>
        </div>
    </div>
  )
}

export default Buttons