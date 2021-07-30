import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Flashcard from "./flashcard";
import "./app.css";
import AddFlashcard from "./addFlashcard";

class App extends Component {
  state = {
    flashcards: [],
    collections: [],
    collection_id: "1",
  };

  async getAllCollections(e) {
    await axios.get("http://127.0.0.1:8000/collections/")
    .then((response) =>
      this.setState({
        collections: response.data,
      })
    );
    console.log(this.state.collections);
  }

  async getFlashcardsById(collection_id) {
    await axios
      .get(`http://127.0.0.1:8000/collections/${collection_id}/flashcard/`)
      .then((response) =>
        this.setState({
          flashcards: response.data,
        })
      );
    console.log(this.state.flashcards);
  }

  addFlashcard = (flashcard, collection_id) => {
    axios.post(
      `http://127.0.0.1:8000/collections/${collection_id}/flashcard/`,
      flashcard
    );
    this.setState({
      flashcards: [...this.state.flashcards, flashcard],
    });
  };

  componentDidMount() {
    this.getFlashcardsById();
    this.getAllCollections();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <AddFlashcard
            addFlashcard={this.addFlashcard}
            collection_id={this.state.flashcardCollection}
          />
          <Flashcard question={this.state.flashcards.question} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;