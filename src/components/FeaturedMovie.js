import React from "react";
import "./FeaturedMovie.css";

export default ({ item }) => {
  let añoInicio = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} Puntos</div>
            <div className="featured--year">{añoInicio.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="featured--descriptions">{description}</div>
            <div className="featured--buttons">
              <a className="featured--verButton" href="">
                ► Reproducir
              </a>
              <a className="featured--verMasButton" href="">
                + Mas Información
              </a>
            </div>
            <div className="featured--geners">
              <strong>Géneros: </strong>
              {genres.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
