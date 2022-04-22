import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


const Recipe = () => {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");
    const params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData)
        console.log(detailData);
    }
    useEffect(() => {
        fetchDetails()
    }, [params.name])
   
    
  return (
    <div>
        <h2>{details.title}</h2>
    </div>
  )
}

export default Recipe;