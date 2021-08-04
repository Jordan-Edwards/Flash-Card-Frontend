import React from 'react';

const CollectionsList = ({collections}) => {
    return (     
        <div>
            {collections.map(({collection_name, index}) => {
            return(
                <ul key={index}>
                    {collection_name}
                </ul>
            )}
            )}
        </div> );
}
 
export default CollectionsList;









