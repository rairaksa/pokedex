import React, { useState, useEffect } from 'react';
import Card from './Card';
import Detail from './Detail';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50')
    .then((response) => response.json())
    .then((data) => {
      setPosts(data.results);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, []);

  return (
    <div className="App relative w-auto min-h-screen flex flex-col gap-8 mx-4 md:mx-48 pt-8">
        <Detail />
        <div className="w-full">
            <h1 className="text-6xl font-extrabold text-center">Pokédex</h1>
            <input className="w-1/5 px-2 pt-1 border border-black rounded-md" type="text" placeholder="Search Pokemon Here..."></input>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            posts.map((post) => {
              return (<Card name={post.name} url={post.url} />)
            })
          }
        </div>
    </div>
  )
}

export default App;