import React, { useState, useEffect } from 'react';

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
        <main> <h3>fix map plz</h3>
            {
                (items != null) ? items.map((item) => <h3> - {item.title}</h3>) : <div><h3>Loading...</h3></div>
            }
        </main>
    )
};

export { RankItems };
