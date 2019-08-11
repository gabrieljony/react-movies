import React, { Component } from "react";

import { Container, Info } from "./styles";

import api from "../../services/api";

import GlobalStyled from "../../styles/global";

import { Link } from "react-router-dom";

export default class Detail extends Component {
  state = {
    movie: []
  };

  componentDidMount() {
    const movie = this.props.match.params.id;
    console.log(movie);

    api.get(`/?apikey=477f8be0&i=${movie}`).then(res => {
      console.log(res.data);
      this.setState({
        movie: res.data
      });
    });
  }

  render() {
    // console.log(this.props.match.params.id);
    return (
      <div>
        <Container>
          <h1>{this.state.movie.Title}</h1>
          <section>
            <img src={this.state.movie.Poster} alt={this.state.movie.Title} />
            <Info>
              Data de Lançamento:<p>{this.state.movie.Released}</p>
              Duração:<p>{this.state.movie.Runtime}</p>
              Genero:<p>{this.state.movie.Genre}</p>
              Diretores:<p>{this.state.movie.Director}</p>
              Atores:<p>{this.state.movie.Actors}</p>
              Sinopse:<p>{this.state.movie.Plot}</p>
              Idioma:<p>{this.state.movie.Language}</p>
              Website:
              <a href={this.state.movie.Website}>{this.state.movie.Website}</a>
            </Info>
          </section>
          <Link to="/">
            <button type="submit">Voltar</button>
          </Link>
        </Container>

        <GlobalStyled />
      </div>
    );
  }
}
