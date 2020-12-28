import React, {useState} from 'react';
import Tweet from './Tweet';



export default function App(){
  const [users] = useState([
    {
      names: 'Austin',
      location: 'Wyoming-USA',
      message: 'Hi dear wad up..'
    },
    {
      names: 'Anthony',
      location: 'Austin-USA',
      message: 'who are you..'
    },
    {
      names: 'Julia',
      location: "Instabul-Turkey",
      message: 'Hey i am julia..'
    },
  ]);  
  return (
    <div className="app">
      {users.map(user => (
        <Tweet names={user.names} message={user.message} location={user.location}/>
      ))}
    </div>
  );
}