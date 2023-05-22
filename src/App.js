import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Card from "./components/card/Card";
import CardList from "./components/cardlist/CardList";
import PageFilter from "./components/pagefilter/PageFilter";
import SearchBox from "./components/searchbox/SearchBox";
import BackgroundImagePage from "./UI/BackgroundImagePage";

function App() {
  const [Characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filtredPage,setFiltredPage]=useState(null)

  const fetchCharacterHandler = useCallback(async (selectedPage) => {
    
    const response = await fetch(`https://rickandmortyapi.com/api/character/?${selectedPage}`);
    const data = await response.json();
    
    const transformedCharacter = data.results.map((caracterData) => {
      return {
        id: caracterData.id,
        name: caracterData.name,
        status: caracterData.status,
        species: caracterData.species,
        gender: caracterData.gender,
        image: caracterData.image,
      };
    });
    setCharacters(transformedCharacter);
    setFiltredPage(selectedPage);
  }, []);

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  //const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
  const filtredCharacters = Characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  //filter
 //const filterChangeHandler = (selectedPage) => {
 //   setFiltredPage(selectedPage);
//  };

  useEffect(() => {
    fetchCharacterHandler();
    // console.log(Characters);
  }, [fetchCharacterHandler]);

  return (
    <div className="App">
      {/*<BackgroundImagePage>*/}
      <h1>Rick and Morty</h1>
      <PageFilter
          selected={filtredPage}
          onChangeFilter={fetchCharacterHandler}
        />
      <SearchBox placeholder="Search  " onChange={changeHandler} />
      {/*<button onClick={fetchCharacterHandler}>Fetch</button> */}

      <CardList Characters={filtredCharacters} />

      {/*</BackgroundImagePage>*/}
    </div>
  );
}

export default App;
