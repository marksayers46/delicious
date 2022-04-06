import { useState, useEffect } from "react";

const Veggie = () => {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
    const data =await api.json();
    console.log(data);
    setVeggie(data.recipes)
  } 
  
  return (
    <div>
      {veggie.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })};
    </div>
  )
}

export default Veggie;