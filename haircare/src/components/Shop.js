import React, { useState, useEffect} from 'react';
// import './App.css';
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

    const data = await fetch(`https://haircare-backend-dingo.herokuapp.com/stylist`
    );
        const stylist = await data.json();
        console.log('item');
        setSports(stylist.stylist);
}

  return (
      <div>
        {/* {stylist.map(stylist =>(
        <h1 key={stylist.stylist.username}>
            {stylist.stylist.username} </h1> */}
            
        
      
    ))}
    </div>
  );
}

export default Shop;
