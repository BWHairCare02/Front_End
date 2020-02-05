import React, { useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
useEffect(() => {
    fetchItems();
}, []);

const [sports, setSports] = useState([]);


const fetchItems = async () => {
    const data = await fetch(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams`
    );
        const sports = await data.json();
        console.log('items',sports.sports['0'].leagues['0'].teams);
        setSports(sports.sports['0'].leagues['0'].teams);
}

  return (
      <div>
        {sports.map(sports =>(
        <h1 key={sports.team.displayName}>
            {sports.team.displayName} <img src={sports.team.logos} alt=""/></h1>
            
        // <img src={sports.team.displayName} alt=""/>
      
    ))}
    </div>
  );
}

export default Shop;
