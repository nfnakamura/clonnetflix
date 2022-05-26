import React from 'react'
import Slider from 'react-slick'
import { apiEntity } from '../../services/apiConfig'
import useApi from '../../hooks/useApi'
import Card from '../Card/Card'
import Separator from '../Separator/Separator'
import { settingsSlider } from './settings'
import styles from './Carrousel.module.css'


const Carrousel = ({entity, title}) => {

    const [movies, loading, error] = useApi(entity);
    

  return (
    <>
        
        <div>
            <h1 className={styles.titulo}>{title}</h1>
        </div>
      <Slider {...settingsSlider}>
        {loading ? (
            <h1>Loading</h1>
        ) : (
            movies.map((movie) => (<Card key={movie.id} title={movie.title || movie.name} imgPath={movie.backdrop_path}/>))
        )}
      </Slider>
      <Separator height={"20px"}/>
    </>
  )
}

export default Carrousel