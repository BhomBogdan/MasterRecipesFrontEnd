import React from "react";
import "./RecipeList.scss";

const RecipesList = (recipe) => {
  return (
    <section className="RecipeListParent">
      <div className="RecipesListc">
        {recipe.recipe.map((ig) => (
          <div
            className="RecipeBox"
            key={ig.idn}
            onClick={recipe.onRemoveItem.bind(this, ig.idn)}
          >
            <div className="TypeOfFood">
              <div className="vegan type"></div>
              <div className="GlutenFree type"></div>
              <div className="FishMeat type"></div>
              <div className="RedMeat type"></div>
            </div>
            <div className="WrapRecipeBox">
              <div className="RecipeImage"></div>
              <div className="tittleRecipe">{ig.tittle}</div>
              <div className="Details">
                <div className="TimePrep">Total Time: 20 min</div>
                <div className="Difficulty easy">Easy</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipesList;
