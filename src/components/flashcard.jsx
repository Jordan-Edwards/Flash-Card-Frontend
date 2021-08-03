import React, { useState } from "react";
import axios from "axios";

import "./flashcard.css";

const Flashcard = ({ cardsById, getCards, props }) => {
  const handleChange = (e) => {
    getCards(e.target.value);
  };

let [counter, adjustCounter] = useState(0)

const[flip, setFlip] = useState(false)



// goToNextFlashcard = () => {
  //   let tempNumber = this.state.cardsById;
  //   tempNumber++;
  //   if (tempNumber === this.state.cardsById.length) {
  //     tempNumber = 0;
  //   }
  //   this.setState({
  //     flashcardNumber: tempNumber,
  //   });
  // };

  // goToPreviousFlashcard = () => {
  //   let tempNumber = this.state.cardsById;
  //   tempNumber--;
  //   if (tempNumber < 0) {
  //     tempNumber = this.state.cardsById.length - 1;
  //   }
  //   this.setState({
  //     flashcardNumber: tempNumber,
  //   });
  // };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4">       
        </div>
        <div className="col-md-4">
          <div className="center">
            <div className="form-inline">
              <form>
                <select
                  className="custom-select custom-select-lg"
                  // value={collectionId}
                  type="text"
                  name="collectionId"
                  onChange={handleChange}
                  // onChange={setFlashcardsByCollectionByIdOne}
                >
                  <br></br>
                  <option value>Collection to Review</option>
                  <option value="1">Collection 1</option>
                  <option value="2">Collection 2</option>
                  <option value="3">Collection 3</option>
                </select>
                {/* <button onSubmit={setFlashcardsByCollectionById}>Change Collection</button> */}
              </form>
            </div>

            
          
            <div onClick={() => setFlip(!flip)} className="card">
              <h2>
                <b> {flip ? cardsById[counter].answer : cardsById[counter].question}</b>
              </h2>
              <p>*click card to flip*</p>
            </div>
            <h6> Card {counter+1} of {cardsById.length}</h6>
            <button className="prev" onClick={() => adjustCounter(counter--)}>Previous</button>
            <button className="next" onClick={() => adjustCounter(counter++)}>Next</button>
          </div>
        </div>
        <div className="col-md-4" />
      </div>
      <div className="text-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Question</th>
              <th scope="col">Answer</th>
            </tr>
          </thead>

          <tbody>
            {cardsById.map(({ id, question, answer }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{question}</td>
                <td>{answer}</td>
                {/* <button type="button" onClick={() => props.updateFlashcard(flashcard,cardsById.collection,cardsById.id)}>Edit Card</button> */}
                {/* <button type="button" class="btn btn-outline-secondary" onClick={() => props.deleteCard(cardsById.collection. cardsById.id)}>Delete</button> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Flashcard;
