import React,{ useState } from 'react';

import './RecipesForm.scss';

const RecipesForm = React.memo(props => {
    
    const [sumbmitedUrl, setsumbmitedUrl] = useState('');
    
    
    const submitHandler = event =>{
        event.preventDefault();
        props.onInsterRecipeUrl({idn: sumbmitedUrl});
    }


    
    
return(
<div className="RecipeFormContainer">
    <div className="RecipeFormSubContainer">
        <div className="WelcomeText">
            <h1>Master Recipes</h1>
            <h3>Create simple and easy recipes</h3>
        </div>
        <form onSubmit={submitHandler}>
            <div className="RecipeForm">
                <label htmlFor="URL">Link to the recipe:</label>
                <input 
                type="text"
                id="idn" 
                value={sumbmitedUrl}
                onChange = {
                    event =>{
                        setsumbmitedUrl(event.target.value);
                    }
                }
                

                
                
                />
            </div>

            
            <div className="Recipe-Submit">
                <button type="submit" className="buttonForm">Continue</button>
            </div>
        </form>
    </div>
                </div>

);

});

export default RecipesForm;