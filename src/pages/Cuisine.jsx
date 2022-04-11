import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
  
    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);

    const getCuisine = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results); 
    };
console.log(cuisine)
  
    return (
    <div key='recipes.id'>
        
    </div>
  )
}

export default Cuisine;