import axios from "axios";

export const tmdb = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: 'api_key=30de39abe1b982a24b9f9a73e2ea38b6',
    entity: {
        topRatedMovies: '/movie/top_rated?',
        topRatedTv: '/tv/top_rated?',
        popularMovies: '/movie/popular?',
        popularTv: '/tv/popular?',
    },
    language: {
        en:'&language=en-US',
        es: '&language=es-ES',
    },
    pagination: '&page=',
    imageUrl: 'https://image.tmdb.org/t/p',
    quality: {
        posterSmall:"/w200",
        posterMedium:"/w300",
        posterLarge:"/w500",
        backdropSmall:"/w300",
        backdropMedium:"/w780",
        backdropLarge:"/w1280",
    }

};

export const apiQuality = {
    posterSmall: "posterSmall",
    posterMedium: "posterMedium",
    posterLarge: "posterLarge",
    backdropSmall: "backdropSmall",
    backdropMedium: "backdropMedium",
    backdropLarge: "backdropLarge",
  };

export const apiEntity={
    topRatedMovies: "topRatedMovies",
    topRatedTv: "topRatedTv",
    popularMovies: "popularMovies",
    popularTv: "popularTv",
    movieById: "movieById",
    tvById: "tvById",
}

export const apiLanguage = {
    english: "en",
    spanish: "es",
}

export const apiBuilder = {
    tryGet: async (entity, lang = 'es', page = 1) => {
        const url = `${tmdb.baseUrl}${tmdb.entity[entity]}${tmdb.apiKey}${tmdb.language[lang]}${tmdb.pagination}${page}`;
      try {
        const res = await axios(url);
        return res;
          
      } catch (error) {
          return [];
      }      
    },
    tryGetById: async (entity, id, lang = 'es') => {
        const url = `${tmdb.baseUrl}${tmdb.entity[entity]}/${id}${tmdb.apiKey}${tmdb.language[lang]}`;
        try {
            const res = await axios(url);
            return res;
        } catch (error) {
            return [];
        }
    },
    tryGetImg: (path, quality = apiQuality.posterLarge) => {
        return `${tmdb.imageUrl}${tmdb.quality[quality]}${path}`
    }
};

