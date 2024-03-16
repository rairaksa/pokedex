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
          setSprites(data.sprites.other['official-artwork']);
        })
        .catch((err) => {
          console.log(err.message);
        })
      }, []);

    return (
        <div className="w-auto h-auto p-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg hover:scale-105">
            <div className="flex flex-row">
                <div className="flex-grow flex flex-col gap-2">
                    <h2 className="flex-grow text-2xl font-extralight text-white">#{ monster.order }</h2>
                    <h2 className="text-2xl font-bold text-white">{ name }</h2>
                    <div className="flex flex-row gap-2">
                        {
                            types.map((type) => {
                                return(
                                    <div className="px-2 py-1 font-extralight rounded-lg border border-white text-white">
                                        {type.type.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-row-reverse">
                    <img className="flex-end w-1/2" src={ sprites.front_default } alt={ name }></img>
                </div>
            </div>
        </div>
    )
}

export default Card;