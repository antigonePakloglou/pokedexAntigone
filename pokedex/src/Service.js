const url = 'http://localhost:3004/pokemons';

export const getAllPokemons = () => {
  return fetch(url).then((response) => response.json());
};

export const getOtherPokemons = (offset) => {
  return fetch(`${url}?offset=${offset}&limit=20`).then((response) =>
    response.json()
  );
};

export const getPokemonById = (id) => {
    return fetch(`${url}/${id}`).then((response) =>
      response.json()
    );
  };

