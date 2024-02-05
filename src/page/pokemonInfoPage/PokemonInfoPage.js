import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const PokemonInfoPage = () => {
    const { id } = useParams();
    const [ pokemonOne, setPokemonOne ] = useState(null);

    const getPokemon = async(id) => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

            setPokemonOne(data);
            return console.log(data, 'sdfsdfsdfsdf');
            ;
        } catch(e) {
            console.log('error'.e);
        } finally {
            console.log('final');
        }
    };
    useEffect(() => {
        getPokemon(id);
    }, [ id ]);

    return (
        <>
            {pokemonOne && <div>
                <h1>Pokemon Info Page {id}</h1>
                <img  src={pokemonOne.sprites.other.dream_world.front_default} alt="pokemon"/>
                <p>Name: {pokemonOne.name}</p>
                <p>Type:{pokemonOne.types.map(value=> value.type.name).join(', ')}</p>
                <p>Stats: {pokemonOne.stats.map(value=> value.stat.name).join(', ')}</p>
                <p>Abilities: {pokemonOne.abilities.map(value => value.ability.name).join(', ')}</p>
                <p>Weight: {pokemonOne.weight}</p>
            </div>}
        </>

    );
};

export default PokemonInfoPage;