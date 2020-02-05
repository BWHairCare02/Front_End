import React, { useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
useEffect(() => {
    fetchItems();
}, []);

const [stylist, setSports] = useState([]);


const fetchItems = async () => {
    // const data = await fetch(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams`
    // );
    //     const sports = await data.json();
    //     console.log('items',sports.sports['0'].leagues['0'].teams);
    //     setSports(sports.sports['0'].leagues['0'].teams);

    const data = await fetch(`https://haircare-backend-dingo.herokuapp.com/`
    );
        const status = await data.json();
        console.log('item',status);
        setSports(status.status);
}

  return (
      <div>
        {/* {status.map(status =>(
        <h1 key={status.status}>
            {status.status} </h1> */}
            
        
      
    ))}
    </div>
  );
}

export default Shop;
