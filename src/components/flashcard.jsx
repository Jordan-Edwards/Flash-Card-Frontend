import React, { useState } from "react";

import "./flashcard.css";

const Flashcard = ({ cards, cardsById, getCards, props }) => {
  const handleChange = (e) => {
    getCards(e.target.value);
  };

let [counter, adjustCounter] = useState(0)


const goToNextFlashcard = () => {
  let adjustCounter = cardsById;
}

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
          
            <div className="card">
              <h4>
                <b>{cardsById[counter].question}</b>
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
              <th scope="col">Question</th>
              <th scope="col">Answer</th>
            </tr>
          </thead>

          <tbody>
            {cardsById.map(({ id, question, answer }) => (
              <tr key={id}>
                <td>{question}</td>
                <td>{answer}</td>

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
