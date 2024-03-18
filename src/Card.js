import React, { useState, useEffect } from 'react';

import Detail from './Detail';

function Card(props) {
    const name = props.name;
    const url = props.url;

    const [monster, setMonster] = useState([]);
    const [types, setTypes] = useState([]);
    const [sprites, setSprites] = useState([]);

    const handleDetail = () => {
        return (<Detail display="block" />);
    }

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
        <div className="group w-auto h-auto p-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg cursor-pointer" onClick={handleDetail}>
            <div className="flex flex-row">
                <div className="flex-grow flex flex-col gap-2">
                    <h2 className="flex-grow text-2xl font-extralight text-white">#{ monster.order }</h2>
                    <h2 className="text-2xl font-bold text-white">{ name }</h2>
                    <div className="flex flex-row gap-2">
                        {
                            types.map((type) => {
                                return(
                                    <div className="px-2 py-1 text-xs font-extralight rounded-lg border border-white text-white">
                                        {type.type.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-row-reverse">
                    <img className="group-hover:scale-110 aspect-square flex-end h-auto w-auto md:w-2/3" src={ sprites.front_default } alt={ name }></img>
                </div>
            </div>
        </div>
    )
}

export default Card;