import Pages from "./pages/Pages";
import Category from './components/Category';
import Search from './components/Search';
import { BrowserRouter } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GiKnifeFork className="logo"/>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}




export default App;
