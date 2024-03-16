import React, { useState, useEffect } from 'react';

function Card(props) {
    const name = props.name;
    const url = props.url;

    const [monster, setMonster] = useState([]);
    const [types, setTypes] = useState([]);
    const [sprites, setSprites] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setMonster(data);
          setTypes(data.types);
          setSprites(data.sprites);
        })
        .catch((err) => {
          console.log(err.message);
        })
      }, []);

    return (
        <div className="w-auto h-auto p-8 bg-green-500 rounded-lg">
            <div className="flex flex-row">
                <div className="flex-grow flex flex-col gap-2">
                    <h2 className="flex-grow text-2xl font-extralight text-white">#{ monster.order }</h2>
                    <h2 className="text-2xl font-bold text-white">{ name }</h2>
                    <div className="flex flex-row gap-2">
                        {
                            types.map((type) => {
                                return(
                                    <div className="px-2 py-1 rounded-md bg-white">
                                        {type.type.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex">
                    <img className="flex-end" src={ sprites.front_default } alt={ name }></img>
                </div>
            </div>
        </div>
    )
}

export default Card;