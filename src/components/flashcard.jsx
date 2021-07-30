import React, { useState,useEffect } from "react";
import "./flashcard.css";
import axios from 'axios'

const Flashcard = (props) => {
  const [collectionsById, setCollectionsById] =useState({Collections:[]});

useEffect(() => {
  axios.get(`http://127.0.0.1:8000/collections/1/flashcard/`)
  .then(response => setCollectionsById(response.data[props.index])
  )}, [collectionsById, props.index]);

  return (
      <React.Fragment>
        
        <div className="row">
          <div className="col-md-4">
          {/* <button className="cardscroll">Previous</button> */}
         </div>
          <div className="col-md-4">
          <div className="center">
          {/* <div className="form-inline">
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
        </div> */}
           
              <div className="card">
                <h4>
                  <b></b>
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


export default Flashcard;
