import React from "react";
import { apiEntity } from "../apiConfig";
import Banner from "../components/Banner/Banner";
import Carrousel from "../components/Carrousel/Carrousel";



const Homepage = () => {
  return (
    <>
      
      <Banner />
      <Carrousel entity={apiEntity.popularMovies} title={'Peliculas Populares'}/>
      <Carrousel entity={apiEntity.popularTv} title={'Series Populares'}/>
      <Carrousel entity={apiEntity.topRatedMovies} title={'Peliculas Mejor Valoradas'}/>
      
      
    </>
  );
};

export default Homepage;