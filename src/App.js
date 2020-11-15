import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';


const App = () => {
  
const APP_ID = "67a202f9";
const APP_KEY = "985bf641c8fbb020170049dc265564fa	";

const[search, setSearch] = useState("");
const[recipes, setRecipes] = useState([]);
const[query, setQuery] = useState("chicken")

useEffect(() => {
getRecipes();
},[query]);


const getRecipes = async() => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
}


const updateSearch = (e) => {
  setSearch(e.target.value);
}

const getSearch = (e => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
})




  return (
    <div className="App">
      <h1>RECIPE APP</h1>
      <form onSubmit={getSearch} className="search-form">
      
      <input className="search-bar" type="text" name="search" value={search} onChange={updateSearch}></input>
      <button className="search-button" type="submit">SEARCH</button>
      </form>
      <div className="recipes">
      {recipes.map(a => (
        <Recipe 
        key = {a.recipe.label}
        title={a.recipe.label}
        image={a.recipe.image} 
        ingredients = {a.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
