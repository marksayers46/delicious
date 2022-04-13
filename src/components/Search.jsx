import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();   

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
    };

  return (
    <FormStyle onSubmit={submitHandler}>
        <FaSearch />
        <input 
        onChange={(e) => setInput(e.target.value)}
        type="text" 
        value={input} 
        />
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin 2% 23%;
    width: 100%;
    position: relative;

    input {
        border: none;
        background: #FFFFFF;
        font-size: 1.5rem;
        color: #000;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 50%;
    }

    svg {
        position: absolute;
        top: 40%;
        left: 2%;
    }
`;

export default Search;