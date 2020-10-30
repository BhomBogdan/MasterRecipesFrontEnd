import React from 'react'



const RecipesList = recipe => {
    return (
            <section className="RecipesListc">

                {recipe.recipe.map(ig =>(

                    <li key={ig.idn} onClick={recipe.onRemoveItem.bind(this, ig.idn)}>

                        
                        <span>{ig.tittle}</span>
                        <span>{ig.URL}</span>
                        
                    </li>
                )
                    
                    
                    )}
            </section>


    );
}

export default RecipesList;