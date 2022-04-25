import Pages from "./pages/Pages";
import Category from './components/Category';
import Search from './components/Search';
import { BrowserRouter, Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}


const Nav = styled.nav`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-family: "Lobster Two", cursive;
  font-size: 1.5rem;
  font-weight: 400;
`;


export default App;
