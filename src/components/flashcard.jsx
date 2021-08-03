import React, { useState } from "react";
import axios from "axios";

import "./flashcard.css";

const Flashcard = ({ cardsById, getCards, props }) => {
  const handleChange = (e) => {
    getCards(e.target.value);
  };

let [counter, adjustCounter] = useState(0)

let flashcard 


const[flip, setFlip] = useState(false)

const updateFlashcard = async (flashcard, collection, id) =>{
  await axios.put (`http://127.0.0.1:8000/${collection}/flashcard/${id}`, flashcard)
  .then(res => {
    console.log(res)
    this.props.cardsById()
  }).catch(err => console.log(err))
};


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
                  <option value="1">collection 1</option>
                  <option value="2">collection 2</option>
                  <option value="3">collection 3</option>
                </select>
                {/* <button onSubmit={setFlashcardsByCollectionById}>Change Collection</button> */}
              </form>
            </div>

            <button onClick={() => adjustCounter(counter--)}>previous</button>
          
            <div onClick={() => setFlip(!flip)} className="card">
              <h4>
                <b> {flip ? cardsById[counter].answer : cardsById[counter].question}</b>
              </h4>
            </div>
            <p>Card {counter+1} of {cardsById.length}</p>
            <button onClick={() => adjustCounter(counter++)}>next</button>
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
