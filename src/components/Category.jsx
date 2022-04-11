import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const Category = () => {
  return (
    <List>
        <NavLink to={'/cuisine/Italian'}>
            <FaPizzaSlice className='icon'/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'}>
            <FaHamburger className='icon' />
            <h4>American</h4>
        </NavLink>
        <NavLink to='/cuisine/Thai'>
            <GiNoodles className='icon' />
            <h4>Thai</h4>
        </NavLink>
        <NavLink to='/cuisine/Japanese'>
            <GiChopsticks className='icon' />
            <h4>Japanese</h4>
        </NavLink>
    </List>
  )
}

export default Category;