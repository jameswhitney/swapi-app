import React, { Component } from "react";
import Nav from "../components/Nav";
import Cardlist from "../components/Cardlist";
import Loading from "../components/Loading";
import "./App.css";

const urls = [
  "https://swapi.py4e.com/api/people/?page=1",
  "https://swapi.py4e.com/api/people/?page=2",
  "https://swapi.py4e.com/api/people/?page=3",
  "https://swapi.py4e.com/api/people/?page=4",
  "https://swapi.py4e.com/api/people/?page=5",
  "https://swapi.py4e.com/api/people/?page=6",
  "https://swapi.py4e.com/api/people/?page=7",
  "https://swapi.py4e.com/api/people/?page=8",
  "https://swapi.py4e.com/api/people/?page=9",
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchfield: "",
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const getCharacterData = await this.getCharacter(urls);
      const characterArray = getCharacterData.flatMap(
        (character) => character.results
      );
      this.setState({ characters: characterArray, isLoading: false });
    } catch {
      alert("Oops something went wrong. Try refreshing the page");
    }
  }

  getCharacter = async (urls) => {
    try {
      const characterData = Promise.all(
        urls.map(async function (url) {
          const resp = await fetch(url);
          return resp.json();
        })
      );
      return characterData;
    } catch (err) {
      alert("Oops something went wrong. Try refreshing the page");
    }
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { searchfield, characters, isLoading } = this.state;
    const filterUsers = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (isLoading) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <Nav search={this.onSearchChange} />
        <Cardlist characters={filterUsers} />
      </React.Fragment>
    );
  }
}

export default App;
