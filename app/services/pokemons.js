import pokeApi from "../api/pokeApi";

export const getAllPokemons = async () => {
  try {
    const res = await pokeApi.get("/pokemon?limit=100000&offset=0");
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
