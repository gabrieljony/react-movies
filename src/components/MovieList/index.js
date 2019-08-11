import React from "react";

import { Container, Repository } from "./styles";

import { Link } from "react-router-dom";

const MovieList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Link to={`/detail/${repository.imdbID}`}>
        <Repository key={repository.imdbID}>
          <header>
            <img src={repository.Poster} alt={repository.Title} />
            <h4>{repository.Title}</h4>
            <strong>Ano de Lançamento: {repository.Year}</strong>
            <small>Tipo: {repository.Type}</small>
          </header>
        </Repository>
      </Link>
    ))}
  </Container>
);

export default MovieList;
