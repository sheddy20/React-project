import React from 'react';
import './App.css'

function Tweet({names, message, location, length}){
    return(
        <div className="tweet">
            <h3>Name: {names}</h3>
            <h3>Tweets: {message}</h3>
            <h3>Location: {location}</h3>
            <p>Tweets-Length: {length}</p> 
        </div>
    );
}

export default Tweet;