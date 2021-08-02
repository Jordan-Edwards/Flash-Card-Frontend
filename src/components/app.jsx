import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Flashcard from "./flashcard";
import "./app.css";
import AddFlashcard from "./addFlashcard";
import Header from "./Header/header";
import CollectionsList from "./collectionList/collectionList";

function App() {
    const [cards, setCards] = useState([
      {collection_name: '', collection_id: ''}
    ])    

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/collections/')
      .then(response => setCards(response.data)
      )}, [])
    
      console.log(cards);
    
    const [cardsById, setCardsById] = useState([
      {collection: '',
      question: '',
      answer: '',
      id: ''}
    ])    
    
    useEffect(() => {
     getCards()}, [])
   
    const getCards = async (id) => {
      await axios.get(`http://127.0.0.1:8000/collections/${id}/flashcard/`)
      .then(response => setCardsById(response.data))

    
    }
    
    
                
    
      // console.log(cardsbyId);

  // async getFlashcardsById(collection_id) {
  //   await axios
  //     .get(`http://127.0.0.1:8000/collections/${collection_id}/flashcard/`)
  //     .then((response) =>
  //       this.setState({
  //         flashcards: response.data,
  //       })
  //     );
  //   console.log(this.state.flashcards);
  // }

  // addFlashcard = (flashcard, collection_id) => {
  //   axios.post(
  //     `http://127.0.0.1:8000/collections/${collection_id}/flashcard/`,
  //     flashcard
  //   );
  //   this.setState({
  //     flashcards: [...this.state.flashcards, flashcard],
  //   });
  // };

    return (
      <React.Fragment>
        <div className="container-fluid">
          <Header />
          <AddFlashcard getCards={getCards} />
          <CollectionsList collections={cards} />
          <Flashcard getCards={getCards}  cardsById={cardsById} />
        </div>
      </React.Fragment>
    );
  
}
export default App;