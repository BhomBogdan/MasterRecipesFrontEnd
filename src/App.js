import React from 'react';


import './App.scss';
import Recipes from './componenets/Recipes';
import Layout from './Layout/Layout'

//import RecipesForm from "./componenets/RecipesForm";


function App() {
  /**
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes").then(response =>
      response.json().then(data => {
        setRecipes(data.recipes);
      })
    );
  }, []);
      fetch("/recipes",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      tittle:'asd'

    })

  })

console.log(recipes)
  */


  return (
    <div>

  <Layout>

  <Recipes/>

  </Layout>

    </div>

  );
}



export default App;
