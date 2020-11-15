import React from 'react'
import './recipe.css'

const Recipe = ({title, image, ingredients}) => {
    return (
        <div className="recipe">
            <h1 >{title}</h1>
            <img className="image" src={image} alt="/"></img>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe
