import React from "react";

const RecipesCurrent = (recipecurrent) => {
  let FetchTittle, submitHandler, FetchPrepTime, FetchCookTime, FetcTotalTime;

  console.log(recipecurrent.recipecurrent.id);
  return (
    <section className="RecipesCurrent">
      let FetchTittle,
      <form onSubmit={submitHandler}>
        <div className="RecipeFormCurrentSub">
          <label htmlFor="Tittle">Tittle:</label>
          <input type="text" id="Tittle" value={FetchTittle} />
          <label htmlFor="PrepT">Preparation Time:</label>
          <input type="text" id="PrepT" value={FetchPrepTime} />
          <label htmlFor="CookT">Cook Time:</label>
          <input type="text" id="CookT" value={FetchCookTime} />
          <label htmlFor="TotalT">Total Time:</label>
          <input type="text" id="TotalT" value={FetcTotalTime} />
        </div>

        <div className="Recipe-Submit">
          <button type="submit" className="buttonForm">
            Continue
          </button>
        </div>
      </form>
    </section>
  );
};

export default RecipesCurrent;
