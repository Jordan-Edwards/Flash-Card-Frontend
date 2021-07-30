import React, { Component } from "react";
import "./flashcard.css";

class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcards: [],
      collections: [],
    };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
}

    handleChange = (event) =>{
        this.setState ({
            [event.target.name]: event.target.value
        });        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const collection_id = {
            collection: this.state.id,           
        }                
        this.props.getFlashcardById(collection_id);
    }


  render() {
    return (
      <React.Fragment>
        
        <div className="row">
          <div className="col-md-4">
          {/* <button className="cardscroll">Previous</button> */}
         </div>
          <div className="col-md-4">
          <div className="center">
          <div className="form-inline">
          <form>
          <select
            className="custom-select custom-select-sm"
            value={this.state.collection}
            type="text"
            name="collection_id"
            onChange={this.handleChange}
                      >
                      <br></br>
            <option value>Collection to Review</option>
            <option value="1">Collection 1</option>
            <option value="2">Collection 2</option>
            <option value="3">Collection 3</option>
          </select>
          <button onSubmit={this.handleSubmit}>Change Collection</button>
          </form>
          <br></br>
        </div>
           
              <div className="card">
                <h4>
                  <b>Question</b>
                </h4>
              </div>
              <p className="center">Card __ of ___</p>
            </div>
          </div>
          <div className="col-md-4" />
        </div>
      </React.Fragment>
    );
  }
}

export default Flashcard;
