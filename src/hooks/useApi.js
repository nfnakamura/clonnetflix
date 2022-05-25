import React, { useEffect, useState } from 'react'
import { apiBuilder, apiLanguage, apiEntity, apiQuality } from '../apiConfig';
import { randomIndex } from '../utils/utils';


const useApi = (entity, lang = apiLanguage.spanish, pagination = 1) => {
    
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(pagination);

  const getData = async () => {

    setLoading(true);
    setError(null);

    const res = await apiBuilder.tryGet(entity, lang, page);
    const data = res.data.results;
    
    if(res.length === 0){
      setError("Error al cargar los datos")       
    }else{
      setValues(data);        
    }
    setLoading(false);
  }; 

  useEffect(() => {
    getData();
  }, [page]);

  const nextPage = () => {};
  const previousPage = () => {};

  const [randomValue, setRandomValue] = useState(null);
  const [randomImg, setRandomImg] = useState(null);

  const getRandomValue = () => {
    if (values.length === 0){
      return;
      }else {
        const selectedValue = values[randomIndex(0, values.length -1)];
        setRandomValue(selectedValue);
        const backgroundImage = apiBuilder.tryGetImg(
          selectedValue.backdrop_path,
          apiQuality.backdropLarge,
        );
        setRandomImg(backgroundImage);       
      }
  }

  useEffect(()=> {
    getRandomValue();
  }, [values])


  return [values, loading, error, randomValue, randomImg];

}

export default useApi