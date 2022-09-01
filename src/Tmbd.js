const API_KEY = "5c74de0bc9ca1f7ce030e2c28e3494b4";
const API_BASE = "https://api.themoviedb.org/3";

/*
-Origianles de Netflix
-Recomendadas (trending)
-Tendencias (top rated)
-Accion
-Comedia
-Terror
-Romance
-Documentales
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originales de Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=es-AR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendadas",
        items: await basicFetch(
          `/trending/all/week?language=es-AR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Tendencias",
        items: await basicFetch(
          `/movie/top_rated?language=es-AR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Acción",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=es-AR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=es-AR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "terror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=es-AR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=es-AR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentales",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=es-AR&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=es-AR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=es-AR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
