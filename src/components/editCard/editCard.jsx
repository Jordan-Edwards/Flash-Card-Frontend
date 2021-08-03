import React, { Component } from 'react';
import './editCard.css'
import axios from 'axios';

class EditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: '',
            question: '',
            answer: '',
            id: ''
          }
          this.handleChange= this.handleChange.bind(this);
          this.handleSubmit= this.handleSubmit.bind(this);
    }

     editFlashcard = async (flashcard, collection_id, id) => {
   await  axios.put(
      `http://127.0.0.1:8000/collections/${collection_id}/flashcard/${id}`,
      flashcard
    ).then(res => {
        console.log(res)
        this.props.getCards()
    }).catch(err => console.log(err))  
  };

    handleChange = (event) =>{
        this.setState ({
            [event.target.name]: event.target.value
        });        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const flashcard = {
            collection: this.state.collection,
            question: this.state.question,
            answer: this.state.answer,
            id: this.state.id
        }
        const collection_id =flashcard.collection;
        const id = flashcard.id;
        console.log(flashcard)
        this.editFlashcard(flashcard, collection_id, id);
    }


    render() { 
        return ( 
        <div className="center">
      
        <form className="form-inline" onSubmit={this.handleSubmit}>
        <h2>Edit Flashcards</h2>
        <br />
        <div className="form-group">
                
                <select className="custom-select custom-select-lg" value={this.state.collection} type="text" name="collection" onChange={this.handleChange}>
                    <option value>Select a Collection</option>
                    <option value="1">Collection 1</option>
                    <option value="2">Collection 2</option>
                    <option value="3">Collection 3</option>

                </select>
            </div>

        <input
          type="text"
          name="id"
          placeholder="ID"
          onChange={this.handleChange}
          value={this.state.id}
        />

        <input
          type="text"
          name="question"
          placeholder="Question"
          onChange={this.handleChange}
          value={this.state.question}
        />

        <input
          type="text"
          name="answer"
          placeholder="Answer"
          onChange={this.handleChange}
          value={this.state.answer}
        />           
 

        <button type="submit"> Submit </button>
      </form>
</div> );
    }
}
 
export default EditCard;