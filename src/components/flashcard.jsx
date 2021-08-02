import React from 'react';
import "./flashcard.css";


const Flashcard = ({cardsById}) => {  
   
    

  // const [flashcardsByCollectionIdOne, setFlashcardsByCollectionByIdOne] = useState;
  // const [collectionId, setCollectionId] = useState({collectionId:''})
  // const [scrollCard, setScrollCard] = useState({})


// useEffect(() => {
//   axios.get(`http://127.0.0.1:8000/collections/`)
//   .then(response =>     
//     setCollections(response.data))}, 
//   [],
//   console.log(collections)
//   );

//  useEffect(() => {
//    axios.get(`http://127.0.0.1:8000/collections/1`)
//   .then(response => setFlashcardsByCollectionByIdOne(response.data[props.index]))}, 
//   [],
//     );
  



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
            className="custom-select custom-select-lg"
            // value={collectionId}
            type="text"
            name="collectionId"
            // onChange={setFlashcardsByCollectionByIdOne}
                      >
                      <br></br>
            {/* <option value>Collection to Review</option> */}
            <option Value="1">Collection 1</option>
            <option value="2">Collection 2</option>
            <option value="3">Collection 3</option>
          </select>
          {/* <button onSubmit={setFlashcardsByCollectionById}>Change Collection</button> */}
          </form>
          <br></br>
        </div>
           <h2></h2>
           <button>previous</button>
              <div className="card">
                <h4>
                  <b>question</b>
                </h4>
              </div>
              <p>Card __ of ___</p>
           <button>next</button>
            </div>
          </div>
          <div className="col-md-4" />
        </div>
        <div class="text-center">  
      <table className="table table-striped">
        <thead>
          <tr>          
            <th scope="col">Question</th>
            <th scope="col">Answer</th>        
            
          </tr>
        </thead>
        
        <tbody>
          {cardsById.map(({id,question,answer}) => (
            <tr key={id}>
              <td>{question}</td>
              <td>{answer}</td>
           
              
              {/* <button type="button" class="btn btn-outline-secondary" onClick={() => props.delete(song.id)}>Delete</button> */}
             </tr>
          ))} 
        </tbody>
      </table>
    </div>

      </React.Fragment>
    );
  }


export default Flashcard;
