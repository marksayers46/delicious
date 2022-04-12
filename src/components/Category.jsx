import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


const Category = () => {
  return (
    <List>
        <Slink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </Slink>
        <Slink to='/cuisine/Thai'>
            <GiNoodles />
            <h4>Thai</h4>
        </Slink>
        <Slink to='/cuisine/Japanese'>
            <GiChopsticks />
            <h4>Japanese</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-right: 2rem;
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    gap: 0.6rem;
    background: linear-gradient(45deg, #494949, #313131);
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: #FFFFFF;
        font-size: 0.8rem;
    }

    svg {
        color: #FFFFFF;
        font-size: 1.5rem;
    }

    // NavLink has a class of active unlike Link. Added active class with &
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: #FFFFFF;
        }

        h4 {
            color: #FFFFFF;
        }
    }
`;

export default Category;