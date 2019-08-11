import React, { Component } from "react";

import { Container, Form } from "./styles";
import MovieList from "../../components/MovieList";

import api from "../../services/api";

export default class Main extends Component {
  state = {
    loading: false,
    repositoryErro: false,
    repositoryInput: "",
    repositories: []
  };

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      //http://www.omdbapi.com/?apikey=477f8be0&s='star'
      //http://www.omdbapi.com/?apikey=477f8be0&i=${param.imdbID}
      api
        .get(`/?apikey=477f8be0&s='${this.state.repositoryInput}'`)
        .then(res => {
          console.log(res.data.Search);
          this.setState({
            repositoryInput: "",
            repositories: res.data.Search,
            repositoryErro: false
          });
        });
    } catch (err) {
      console.log(err);
      this.setState({ repositoryErro: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <h1>Movies</h1>
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="Search for the movie..."
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>

        <MovieList repositories={this.state.repositories} />
      </Container>
    );
  }
}
