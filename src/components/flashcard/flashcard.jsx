import React, { useState } from "react";
import "./flashcard.css";

const Flashcard = ({ cardsById, getCards, deleteFlashcard }) => {
  const handleChange = (e) => {
    getCards(e.target.value); {
      adjustCounter(0)
    }
  };

  let [counter, adjustCounter] = useState(0);

  // const [flip, setFlip] = useState(false);

  const goToNextFlashcard = () => {
    let tempNumber = counter;
    tempNumber++;
    if (tempNumber === cardsById.length) {
      tempNumber = 0;
    }
    adjustCounter(tempNumber);
  };
  const goToPreviousFlashcard = () => {
    let tempNumber = counter;
    tempNumber--;
    if (tempNumber < 0)
    tempNumber = cardsById.length -1;
    adjustCounter(tempNumber);
  };


  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="center">
            <div className="form-inline">
              <form>
                <h2>View Cards</h2>
                <select
                  className="custom-select custom-select-lg"
                  type="text"
                  name="collectionId"
                  onChange={handleChange}>
                  <option value>Collection to Review</option>
                  <option value="1">Collection 1</option>
                  <option value="2">Collection 2</option>
                  <option value="3">Collection 3</option>
                </select>
              </form>
            </div>
            {/* <div onClick={() => setFlip(!flip)} className="card">
              <h2>
                <b>
                  {" "}
                  {flip
                    ? cardsById[counter].answer
                    : cardsById[counter].question}
                </b>
              </h2>
              <p>*click card to flip*</p>
            </div> */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2><b>{cardsById[counter].question}</b></h2>
                </div>
                <div className="flip-card-back">
                  <h2><b>{cardsById[counter].answer}</b></h2>
                </div>
              </div>
            </div>

            <h5>
              Card {counter + 1} of {cardsById.length}
            </h5>
            <button className="prev" onClick={() => goToPreviousFlashcard()}>
              <i class="arrow left"></i>
            </button>
            <button className="next" onClick={() => goToNextFlashcard()}>
              <i class="arrow right"></i>
            </button>
          </div>
        </div>
        

        <div className="col-md-4" />
      </div>
      <hr />
  
    </React.Fragment>
  );
};

export default Flashcard;
