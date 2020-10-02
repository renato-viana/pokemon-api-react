import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import { MainContainer, Container, Img, Id, Text } from './styles';

import { Button } from '../Button';

export const Card = () => {
  const [pokemons, setPokemons] = useState({ results: [] });
  const [fetchPokemons, setFetchPokemons] = useState(0);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios(
        `https://pokeapi.co/api/v2/pokemon?offset=${fetchPokemons}&limit=20`
      );

      const index = pokemons.results.length;
      const pokemon = await res.data.results.map((data, index) => ({
        name: data.name,
        id: fetchPokemons + (index + 1),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          fetchPokemons + (index + 1)
        }.png`,
      }));
      setPokemons({ results: [...pokemons.results, ...pokemon] });
    };
    fetchPokemon();
  }, [fetchPokemons]);

  const handleClick = () => {
    setFetchPokemons(fetchPokemons + 20);
  };

  return (
    <div>
      <MainContainer>
        {pokemons.results.map((pokemon) => (
          <Container key={pokemon.id}>
            <Id>{pokemon.id}</Id>
            <Text>{pokemon.name}</Text>
            <Img src={pokemon.image}></Img>
          </Container>
        ))}
      </MainContainer>
      <Button handleClick={() => handleClick()} />
    </div>
  );
};
