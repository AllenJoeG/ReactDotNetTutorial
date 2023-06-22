import React, { useState, useEffect } from 'react';
import MovieImageArr from "./MovieImages.js";
import RankingGrid from './RankingGrid.js';

const RankItems = () => {

    //yay hooks
    const [items, setItems] = useState([]);

    //Initializing just for movie data type
    const itemType = 1;

    useEffect(() => {
        fetch(`item/${itemType}`)
            .then((results) => {
                console.log(results);
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    },[])

    return (
      <main>
        <RankingGrid items={items} imgArr={MovieImageArr} />
            <div className="items-not-ranked">
              {
                (items.length > 0) ? items.map((item) =>
                  <div className="unranked-cell">
                    <img id={`item-${item.id}`} src={MovieImageArr.find(o => o.id === item.imageId)?.image} />
                  </div>
                ) :
                  <div><h3>Loading...</h3></div>
              }
            </div>   
        </main>
    )
};

export { RankItems };
