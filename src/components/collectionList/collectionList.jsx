import React from 'react';
import './collectionList.css';

const CollectionsList = ({cardsById, deleteFlashcard}) => {

    const closeTable = () => {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

    return (     
        <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
    
          <h3>Collection Details</h3>
          <button
                    type="button"                    
                    onClick={() => closeTable()}
                  >
                    Open/Close Details</button>
        <div id="myDIV">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Collection ID</th>
                <th scope="col">Card ID</th>
                <th scope="col">Question</th>
                <th scope="col">Answer</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody>
              {cardsById.map(({ id, question, answer, collection }) => (
                <tr key={id}>
                  <td>{collection}</td>
                  <td>{id}</td>
                  <td>{question}</td>
                  <td>{answer}</td>
                  <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => deleteFlashcard(collection, id)}
                  >
                    Delete
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         </div>
          <div className="col-md-3" />
        </div>
      </div>);
}
 
export default CollectionsList;









