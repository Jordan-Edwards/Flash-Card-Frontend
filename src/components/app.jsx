import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Flashcard from "./flashcard";
import "./app.css";
import AddFlashcard from "./addFlashcard";
import Header from "./Header/header";
// import CollectionsList from "./collectionList/collectionList";
import EditCard from "./editCard/editCard";

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
      id: '',
      flashcardNumber:0}
    ])    
     
    useEffect(() => {
     getCards()}, [])
    
    //  useEffect(() => {
    //  deleteFlashcard()}, [])
   
    const getCards = async (id) => {
      await axios.get(`http://127.0.0.1:8000/collections/${id}/flashcard/`)
      .then(response => setCardsById(response.data))    
    }
       
    const deleteFlashcard = async (collection, id) => {
      await axios.delete(`http://127.0.0.1:8000/collection/${collection}/flashcard/${id}`)
      .then (response => console.log(response))
    }            
    
    

    return (
      <React.Fragment>
        <div className="container-fluid">
          <Header />
          <AddFlashcard getCards={getCards} />
          <EditCard getCards={getCards} />
          {/* <CollectionsList collections={cards} /> */}
          <Flashcard getCards={getCards} cards={cards} 
          cardsById={cardsById}      
           />
        </div>
        
      </React.Fragment>
    );
  
}
export default App;