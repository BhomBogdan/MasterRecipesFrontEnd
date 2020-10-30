import React,{ useEffect, useState} from 'react';

import RecipesForm from './RecipesForm';
import RecipesList from './RecipesList';




const Recipes = () =>{

    const [ userRecipes, setUserRecipes] = useState([]);

    useEffect (() =>{

        fetch('/recipes').then(response => response.json().then(responseData=>
          
            {
                console.log(responseData.recipes[3])
                const loadedRecipes = [];
                for(const key in responseData.recipes){
                    
                    loadedRecipes.push({
                    id:key,
                    tittle:responseData.recipes[key].tittle,
                    URL: responseData.recipes[key].URL,
                    time: responseData.recipes[key].time,
                    idn: responseData.recipes[key].idn,
                    
                    });
                }
                console.log(loadedRecipes);
                setUserRecipes(loadedRecipes);
            }));
        
    }, []);

    const addRecipesHandler = recipes =>{
        fetch('/recipes',{
            method: 'POST',
            body: JSON.stringify(recipes),
            headers: { 'Content-Type': 'application/json'}
        })
       .then( responseData=> {setUserRecipes(prevRecipes => [
                    ...prevRecipes,{id: responseData.id , ...recipes}
                ]);
                
            });
    };


        



    return (

        <div className="Recipes-section">
            <RecipesForm onInsterRecipeUrl={addRecipesHandler}/>
            <RecipesList recipe={userRecipes} onRemoveItem={()=>{}}/>
        </div>
    );
}; 



export default Recipes;

