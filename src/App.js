import Pages from "./pages/Pages";
import Category from './components/Category';
import Search from './components/Search';
import { BrowserRouter } from 'react-router-dom';
import { MdFastfood } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MdFastfood className="logo" />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}




export default App;
