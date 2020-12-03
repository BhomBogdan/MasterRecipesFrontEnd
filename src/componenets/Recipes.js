import React, { useEffect, useState } from "react";
//import RecipesCurrent from "./RecipesCurrent";

import RecipesForm from "./RecipesForm";
import RecipesList from "./RecipesList";

const Recipes = () => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [CurrentIdRecipe, setCurrentIdRecipe] = useState([]);
  useEffect(() => {
    fetch("/recipes").then((response) =>
      response.json().then((responseData) => {
        const loadedRecipes = [];
        console.log(loadedRecipes);
        console.log("up is loaded Recipes");
        for (const key in responseData.recipes) {
          loadedRecipes.push({
            id: key,
            tittle: responseData.recipes[key].tittle,
            URL: responseData.recipes[key].URL,
            time: responseData.recipes[key].time,
            idn: responseData.recipes[key].idn,
          });
        }
        console.log(responseData.recipes);
        console.log("status");
        setUserRecipes(loadedRecipes);
      })
    );
  }, [loading]);

  const addRecipesHandler = (recipes) => {
    fetch("/recipes", {
      method: "POST",
      body: JSON.stringify(recipes),
      headers: { "Content-Type": "application/json" },
    }).then((responseData) => {
      console.log(responseData);
      console.log("up is responseData");
      setUserRecipes((prevRecipes) => [
        ...prevRecipes,
        { id: responseData.id, ...recipes },
      ]);
      setLoading(true);
      console.log("true");
      console.log(responseData.tittle);
      console.log("responseData");
    });
  };

  return (
    <div className="Recipes-section">
      <RecipesForm onInsterRecipeUrl={addRecipesHandler} />

      <RecipesList recipe={userRecipes} onRemoveItem={() => {}} />
    </div>
  );
};

export default Recipes;
//<RecipesCurrent recipecurrent={userRecipes} />//
