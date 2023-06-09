import React, { useState, useEffect } from 'react';

const RankItems = () => {

    //yay hooks
    const [items, setItems] = useState([]);

    //Initializing just for movie data type
    const dataType = 1;

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    }, []);

    return (
        <main>
            {
                (items != null) ?
                    items.map((item) => <h3>{item.title}</h3>)
                    :
                    <div>Loading...</div>)
            }
        </main>
    )
}

export default RankItems;